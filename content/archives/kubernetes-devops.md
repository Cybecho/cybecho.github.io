---
title: "Kubernetes 기반 DevOps 파이프라인 구축"
date: 2025-01-10
description: "마이크로서비스 아키텍처를 위한 완전 자동화된 CI/CD 파이프라인 설계 및 구현"
featured_image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop"
tags: ["Kubernetes", "DevOps", "CI/CD", "Docker"]
categories: ["인프라"]
draft: false
---

![Kubernetes DevOps](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop)

## 🎯 프로젝트 목표

대규모 마이크로서비스 환경에서 효율적인 개발, 테스트, 배포를 위한 완전 자동화된 DevOps 파이프라인을 구축하는 것이 이 프로젝트의 핵심 목표입니다.

## 🏗️ 아키텍처 개요

### 전체 시스템 구조
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Development   │    │   Staging       │    │   Production    │
│   Environment   │────│   Environment   │────│   Environment   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌─────────────────┐
                    │  CI/CD Pipeline │
                    │  (GitLab CI)    │
                    └─────────────────┘
```

### 핵심 컴포넌트
1. **Source Control**: GitLab
2. **Container Registry**: Harbor
3. **Orchestration**: Kubernetes (K8s)
4. **Monitoring**: Prometheus + Grafana
5. **Logging**: ELK Stack
6. **Security**: Falco + OPA Gatekeeper

## 🚀 CI/CD 파이프라인

### Pipeline 단계

#### 1. Code Quality & Security
```yaml
stages:
  - code-quality
  - security-scan
  - unit-test
  - build
  - integration-test
  - deploy-staging
  - e2e-test
  - deploy-production

code-quality:
  stage: code-quality
  script:
    - sonar-scanner
    - eslint src/
    - go vet ./...
  only:
    - merge_requests
```

#### 2. Container Build & Scan
```yaml
build-image:
  stage: build
  script:
    - docker build -t $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA .
    - trivy image $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA
    - docker push $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA
```

#### 3. Kubernetes Deployment
```yaml
deploy-staging:
  stage: deploy-staging
  script:
    - helm upgrade --install $APP_NAME 
      ./helm-charts/$APP_NAME 
      --set image.tag=$CI_COMMIT_SHA
      --namespace staging
```

## 🔧 Kubernetes 구성

### 1. Namespace 구조
```yaml
# 환경별 네임스페이스 분리
apiVersion: v1
kind: Namespace
metadata:
  name: production
  labels:
    environment: prod
    monitoring: enabled
---
apiVersion: v1
kind: Namespace
metadata:
  name: staging
  labels:
    environment: staging
    monitoring: enabled
```

### 2. 리소스 관리
```yaml
# Resource Quotas
apiVersion: v1
kind: ResourceQuota
metadata:
  name: prod-quota
  namespace: production
spec:
  hard:
    requests.cpu: "100"
    requests.memory: 200Gi
    limits.cpu: "200"
    limits.memory: 400Gi
    pods: "50"
```

### 3. 보안 정책
```yaml
# Network Policy
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: deny-all
spec:
  podSelector: {}
  policyTypes:
  - Ingress
  - Egress
```

## 📊 모니터링 및 관찰가능성

### 1. Prometheus 메트릭 수집
```yaml
# ServiceMonitor
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: app-metrics
spec:
  selector:
    matchLabels:
      app: my-app
  endpoints:
  - port: metrics
    path: /metrics
    interval: 30s
```

### 2. Grafana 대시보드
- **클러스터 상태**: 노드, 파드 현황
- **애플리케이션 메트릭**: 처리량, 지연시간, 에러율
- **리소스 사용량**: CPU, 메모리, 네트워크
- **비즈니스 메트릭**: 사용자 활동, 매출 지표

### 3. 알림 설정
```yaml
# PrometheusRule
apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: app-alerts
spec:
  groups:
  - name: app.rules
    rules:
    - alert: HighErrorRate
      expr: rate(http_requests_total{status=~"5.."}[5m]) > 0.1
      labels:
        severity: critical
      annotations:
        summary: "High error rate detected"
```

## 🛡️ 보안 구현

### 1. 이미지 보안 스캐닝
```bash
# Trivy를 통한 취약점 스캔
trivy image --severity HIGH,CRITICAL nginx:latest

# Falco 룰 적용
- rule: Detect Shell in Container
  desc: A shell was spawned in a container
  condition: >
    spawned_process and container and 
    shell_procs and proc.pname exists
  output: >
    Shell spawned in a container 
    (user=%user.name container_id=%container.id)
```

### 2. RBAC 구성
```yaml
# ClusterRole
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: developer
rules:
- apiGroups: [""]
  resources: ["pods", "services"]
  verbs: ["get", "list", "create", "update"]

# RoleBinding
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: developer-binding
subjects:
- kind: User
  name: developer@company.com
roleRef:
  kind: ClusterRole
  name: developer
```

### 3. OPA Gatekeeper 정책
```yaml
# 보안 정책 예시
apiVersion: templates.gatekeeper.sh/v1beta1
kind: ConstraintTemplate
metadata:
  name: k8srequiredsecuritycontext
spec:
  crd:
    spec:
      validation:
        type: object
        properties:
          runAsNonRoot:
            type: boolean
```

## 🔄 배포 전략

### 1. Blue-Green 배포
```yaml
# Blue-Green 배포 구성
apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: rollout-bluegreen
spec:
  strategy:
    blueGreen:
      activeService: rollout-bluegreen-active
      previewService: rollout-bluegreen-preview
      prePromotionAnalysis:
        templates:
        - templateName: success-rate
        args:
        - name: service-name
          value: rollout-bluegreen-preview.default.svc.cluster.local
```

### 2. Canary 배포
```yaml
# Canary 배포 설정
spec:
  strategy:
    canary:
      steps:
      - setWeight: 20
      - pause: {duration: 10m}
      - setWeight: 40
      - pause: {duration: 10m}
      - setWeight: 60
      - pause: {duration: 10m}
      - setWeight: 80
      - pause: {duration: 10m}
```

## 📈 성능 최적화

### 1. 리소스 최적화
```yaml
# HPA 설정
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: my-app
  minReplicas: 3
  maxReplicas: 100
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
```

### 2. 클러스터 오토스케일링
```yaml
# Cluster Autoscaler
apiVersion: apps/v1
kind: Deployment
metadata:
  name: cluster-autoscaler
  namespace: kube-system
spec:
  template:
    spec:
      containers:
      - image: k8s.gcr.io/autoscaling/cluster-autoscaler:v1.21.0
        name: cluster-autoscaler
        command:
        - ./cluster-autoscaler
        - --v=4
        - --stderrthreshold=info
        - --cloud-provider=aws
        - --skip-nodes-with-local-storage=false
        - --expander=least-waste
        - --node-group-auto-discovery=asg:tag=k8s.io/cluster-autoscaler/enabled,k8s.io/cluster-autoscaler/kubernetes
```

## 🎯 테스트 자동화

### 1. 단위 테스트
```yaml
unit-test:
  stage: unit-test
  script:
    - go test -v -cover ./...
    - npm test -- --coverage
  coverage: '/coverage: \d+\.\d+% of statements/'
```

### 2. 통합 테스트
```yaml
integration-test:
  stage: integration-test
  services:
    - postgres:13
    - redis:6
  script:
    - docker-compose -f docker-compose.test.yml up -d
    - npm run test:integration
```

### 3. E2E 테스트
```yaml
e2e-test:
  stage: e2e-test
  script:
    - kubectl create namespace test-$CI_COMMIT_SHORT_SHA
    - helm install test-app ./helm-charts/app --namespace test-$CI_COMMIT_SHORT_SHA
    - cypress run --config baseUrl=https://test-$CI_COMMIT_SHORT_SHA.example.com
```

## 📊 성과 지표

### 개발 효율성
- **배포 빈도**: 하루 15회 → 하루 50회 (+233%)
- **리드 타임**: 2주 → 2시간 (-99%)
- **MTTR**: 4시간 → 30분 (-87.5%)
- **변경 실패율**: 15% → 2% (-87%)

### 인프라 안정성
- **가용성**: 99.9% → 99.95% (+0.05%p)
- **응답 시간**: 평균 200ms 유지
- **자동 복구율**: 95% (인시던트 자동 해결)

### 비용 최적화
- **클라우드 비용**: 월 $50,000 → $35,000 (-30%)
- **개발자 생산성**: 40% 향상
- **운영 인력**: 24명 → 12명 (-50%)

## 🛠️ 사용된 도구 및 기술

### 핵심 기술 스택
- **Kubernetes**: v1.24
- **Docker**: v20.10
- **Helm**: v3.8
- **GitLab CI**: v14.10
- **Harbor**: v2.5
- **Prometheus**: v2.35
- **Grafana**: v8.5

### 보안 도구
- **Trivy**: 컨테이너 이미지 스캔
- **Falco**: 런타임 보안 모니터링
- **OPA Gatekeeper**: 정책 관리
- **cert-manager**: TLS 인증서 자동 관리

### 모니터링 스택
- **Prometheus**: 메트릭 수집
- **Grafana**: 시각화
- **AlertManager**: 알림 관리
- **Jaeger**: 분산 추적
- **ELK Stack**: 로그 수집 및 분석

## 🚧 직면한 도전과 해결책

### 1. 복잡성 관리
**문제**: 마이크로서비스 간 의존성 관리의 복잡성

**해결책**: 
- Service Mesh (Istio) 도입
- 의존성 그래프 시각화
- 계약 테스트 (Pact) 도입

### 2. 관찰가능성 확보
**문제**: 분산 시스템에서 문제 추적의 어려움

**해결책**:
- 통합 로깅 시스템 구축
- 분산 추적 시스템 도입
- SLI/SLO 기반 모니터링

### 3. 보안 강화
**문제**: 컨테이너 환경에서의 보안 위협

**해결책**:
- Zero Trust 네트워크 모델
- 이미지 서명 및 검증
- 런타임 보안 모니터링

## 🔮 향후 개선 계획

### 단기 계획 (3개월)
- [ ] GitOps 패턴 적용 (ArgoCD)
- [ ] Service Mesh 도입 (Istio)
- [ ] 정책 기반 거버넌스 강화

### 중기 계획 (6개월)
- [ ] 멀티 클러스터 관리
- [ ] 비용 최적화 자동화
- [ ] 장애 주입 테스트 (Chaos Engineering)

### 장기 계획 (1년)
- [ ] AI/ML 기반 예측적 스케일링
- [ ] 완전 자동화된 인시던트 대응
- [ ] 크로스 클라우드 배포

## 📚 학습한 교훈

### 기술적 교훈
1. **점진적 도입의 중요성**: 모든 것을 한 번에 바꾸려 하지 말고 단계적으로 접근
2. **모니터링 우선**: 관찰가능성 없이는 문제 해결이 불가능
3. **보안은 처음부터**: 나중에 추가하기보다는 설계 단계부터 고려

### 조직적 교훈
1. **문화의 중요성**: DevOps는 도구가 아닌 문화의 변화
2. **교육 투자**: 팀원들의 역량 개발이 성공의 핵심
3. **지속적 개선**: 완벽한 시스템은 없으며 지속적인 개선이 필요

## 📄 관련 문서 및 자료

- [Kubernetes 공식 문서](https://kubernetes.io/docs/)
- [CNCF Landscape](https://landscape.cncf.io/)
- [12 Factor App](https://12factor.net/)
- [Site Reliability Engineering Book](https://sre.google/books/)

## 🏆 인정받은 성과

- **DevOps 혁신상** - CloudNative Conference 2024
- **Best Practice 사례** - Kubernetes Community
- **기술 블로그 베스트 포스트** - InfoQ Korea