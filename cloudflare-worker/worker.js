/**
 * Cloudflare Worker - Gemini API Proxy for Magic Search
 *
 * 이 Worker는 Gemini API에 대한 프록시 역할을 합니다.
 * API 키를 서버측에서 관리하여 클라이언트에 노출되지 않습니다.
 *
 * 환경변수 설정 필요:
 * - GEMINI_API_KEY: Google AI Studio에서 발급받은 API 키
 *
 * 배포 후 Worker URL을 Magic Search 페이지에 설정하세요.
 */

// 설정
const CONFIG = {
  // 허용된 origin (본인 블로그 도메인으로 변경)
  ALLOWED_ORIGINS: [
    'https://cybecho.github.io',
    'http://localhost:1313', // Hugo 개발 서버
    'http://127.0.0.1:1313'
  ],

  // Gemini API 설정
  GEMINI_MODEL: 'gemma-3-4b-it',
  GEMINI_API_URL: 'https://generativelanguage.googleapis.com/v1beta/models/',

  // Rate Limiting (KV 없이 메모리 기반 - Worker 재시작시 리셋)
  RATE_LIMIT_PER_IP: 30,      // IP당 일일 요청 제한
  RATE_LIMIT_WINDOW: 86400000 // 24시간 (밀리초)
};

// 간단한 인메모리 rate limiting (KV 없이)
const rateLimitMap = new Map();

function checkRateLimit(ip) {
  const now = Date.now();
  const key = ip;

  if (!rateLimitMap.has(key)) {
    rateLimitMap.set(key, { count: 1, resetAt: now + CONFIG.RATE_LIMIT_WINDOW });
    return { allowed: true, remaining: CONFIG.RATE_LIMIT_PER_IP - 1 };
  }

  const data = rateLimitMap.get(key);

  // 윈도우 만료 시 리셋
  if (now > data.resetAt) {
    rateLimitMap.set(key, { count: 1, resetAt: now + CONFIG.RATE_LIMIT_WINDOW });
    return { allowed: true, remaining: CONFIG.RATE_LIMIT_PER_IP - 1 };
  }

  // 제한 초과 체크
  if (data.count >= CONFIG.RATE_LIMIT_PER_IP) {
    return { allowed: false, remaining: 0 };
  }

  // 카운트 증가
  data.count++;
  return { allowed: true, remaining: CONFIG.RATE_LIMIT_PER_IP - data.count };
}

// CORS 헤더
function corsHeaders(origin) {
  const allowedOrigin = CONFIG.ALLOWED_ORIGINS.includes(origin) ? origin : CONFIG.ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400'
  };
}

// 에러 응답
function errorResponse(message, status, origin) {
  return new Response(
    JSON.stringify({ error: message }),
    {
      status,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders(origin)
      }
    }
  );
}

// 메인 핸들러
export default {
  async fetch(request, env, ctx) {
    const origin = request.headers.get('Origin') || '';
    const ip = request.headers.get('CF-Connecting-IP') || 'unknown';

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(origin)
      });
    }

    // POST만 허용
    if (request.method !== 'POST') {
      return errorResponse('Method not allowed', 405, origin);
    }

    // Origin 검증
    if (!CONFIG.ALLOWED_ORIGINS.includes(origin)) {
      return errorResponse('Origin not allowed', 403, origin);
    }

    // Rate limit 체크
    const rateLimit = checkRateLimit(ip);
    if (!rateLimit.allowed) {
      return errorResponse('Rate limit exceeded. Please try again tomorrow.', 429, origin);
    }

    // API 키 확인
    const apiKey = env.GEMINI_API_KEY;
    if (!apiKey) {
      return errorResponse('API key not configured', 500, origin);
    }

    try {
      // 요청 파싱
      const body = await request.json();
      const { query, context } = body;

      if (!query || !context) {
        return errorResponse('Missing query or context', 400, origin);
      }

      // 시스템 프롬프트
      const systemPrompt = `당신은 "삽질 저장소" 블로그의 AI 검색 어시스턴트입니다.
사용자의 질문에 대해 아래 제공된 블로그 글들을 참고하여 답변해 주세요.

규칙:
1. 반드시 제공된 블로그 글 내용만을 기반으로 답변하세요.
2. 블로그에 관련 내용이 없으면 "이 블로그에는 관련 글이 없습니다"라고 솔직히 말해주세요.
3. 답변은 간결하고 명확하게 작성하세요.
4. 관련 글의 제목을 자연스럽게 언급해 주세요.
5. 마크다운 형식을 사용해도 됩니다.
6. 한국어로 답변하세요.`;

      const userMessage = `[사용자 질문]
${query}

[참고할 블로그 글들]
${context}

위 블로그 글들을 참고하여 사용자의 질문에 답변해 주세요.`;

      // Gemini API 호출
      const geminiUrl = `${CONFIG.GEMINI_API_URL}${CONFIG.GEMINI_MODEL}:generateContent?key=${apiKey}`;

      const geminiResponse = await fetch(geminiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: systemPrompt + '\n\n' + userMessage }]
          }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1024,
            topP: 0.9
          },
          safetySettings: [
            { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_ONLY_HIGH" },
            { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_ONLY_HIGH" },
            { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_ONLY_HIGH" },
            { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_ONLY_HIGH" }
          ]
        })
      });

      if (!geminiResponse.ok) {
        const errorText = await geminiResponse.text();
        console.error('Gemini API error:', errorText);

        if (geminiResponse.status === 429) {
          return errorResponse('AI 서비스가 일시적으로 바쁩니다. 잠시 후 다시 시도해 주세요.', 429, origin);
        }
        return errorResponse('AI 응답 생성에 실패했습니다.', 500, origin);
      }

      const geminiData = await geminiResponse.json();

      // 응답 추출
      const responseText = geminiData.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!responseText) {
        return errorResponse('AI 응답을 파싱할 수 없습니다.', 500, origin);
      }

      // 성공 응답
      return new Response(
        JSON.stringify({
          response: responseText,
          remaining: rateLimit.remaining
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders(origin)
          }
        }
      );

    } catch (err) {
      console.error('Worker error:', err);
      return errorResponse('Internal server error', 500, origin);
    }
  }
};
