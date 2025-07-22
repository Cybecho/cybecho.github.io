// URL Preview Configuration
window.URLPreviewConfig = {
  // 프리뷰를 비활성화할 도메인들
  excludeDomains: [
    'localhost',
    '127.0.0.1',
    'github.com/cybecho', // 자신의 GitHub 제외
    'cybecho.github.io'   // 자신의 사이트 제외
  ],
  
  // 프리뷰를 비활성화할 CSS 선택자들
  excludeSelectors: [
    '.no-preview',
    '.social-links a',
    'nav a',
    'header a',
    'footer a'
  ],
  
  // 특정 URL 패턴 제외
  excludePatterns: [
    /\.pdf$/i,
    /\.zip$/i,
    /\.exe$/i,
    /\.(jpg|jpeg|png|gif|svg|webp)$/i,
    /youtube\.com\/watch/i,  // YouTube는 별도 임베드로
    /youtu\.be/i
  ],
  
  // 캐시 설정
  cache: {
    maxAge: 3600000, // 1시간 (밀리초)
    maxSize: 100     // 최대 100개 항목
  },
  
  // 로딩 지연 시간 (성능 최적화)
  debounceTime: 300,
  
  // 타임아웃 설정
  timeout: 10000, // 10초
  
  // 이미지 로딩 실패시 대체 아이콘들
  fallbackIcons: {
    'github.com': '🐙',
    'stackoverflow.com': '📚',
    'medium.com': '✏️',
    'dev.to': '👨‍💻',
    'youtube.com': '🎥',
    'vimeo.com': '🎬',
    'twitter.com': '🐦',
    'facebook.com': '📘',
    'linkedin.com': '💼',
    'default': '🔗'
  },
  
  // 특정 사이트별 최적화 설정
  siteOptimizations: {
    'github.com': {
      titleSelector: 'h1[data-pjax="#js-repo-pjax-container"] strong a, .js-navigation-item .text-bold a',
      descriptionSelector: '[data-pjax="#js-repo-pjax-container"] p, .repository-content .plain'
    },
    'stackoverflow.com': {
      titleSelector: 'h1[data-se-link-id] a, .question-hyperlink',
      descriptionSelector: '.excerpt, .s-prose p'
    }
  }
};

// CSS 클래스 기반 설정 적용
document.addEventListener('DOMContentLoaded', function() {
  // 프리뷰 비활성화 클래스 자동 추가
  const autoExcludeSelectors = [
    'nav a[href^="http"]',
    'header a[href^="http"]', 
    'footer a[href^="http"]',
    '.social-links a[href^="http"]',
    '.brand-link[href^="http"]'
  ];
  
  autoExcludeSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(link => {
      link.classList.add('no-preview');
    });
  });
});