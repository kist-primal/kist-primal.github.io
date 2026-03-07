# 연구실 홈페이지 프로젝트 - Claude Code 인수인계 문서

## 프로젝트 개요

KIST PRIMAL 연구실 홈페이지를 **Al-Folio** Jekyll 템플릿 기반으로 GitHub Pages에 배포하는 프로젝트입니다.

- **레포지토리**: `https://github.com/kist-primal/kist-primal.github.io`
- **배포 URL**: `https://kist-primal.github.io`
- **기반 템플릿**: [alshedivat/al-folio](https://github.com/alshedivat/al-folio) (최신 버전, "Use this template"으로 생성)
- **GitHub Organization**: `kist-primal`
- **작업자 계정**: `Seung-Sub`

---

## 현재 상태

### 완료된 작업
1. Al-Folio 템플릿으로 레포 생성 완료
2. `_config.yml` 원본 기반으로 최소 수정 적용 완료 (아래 변경 내역 참고)
3. `_sass/_custom.scss` 커스텀 디자인 파일 추가 완료
4. `assets/css/main.scss` 맨 끝에 `@use "custom";` 추가 완료
5. `_pages/about.md` 커스텀 Hero 섹션 포함 메인 페이지 교체 완료
6. `_pages/people.md` 멤버 페이지 추가 완료
7. `_pages/contact.md` 연락처 페이지 추가 완료
8. `_bibliography/papers.bib` 샘플 논문 4편 추가 완료
9. GitHub Actions Deploy site 빌드 성공 (초록 체크)

### 미해결 이슈
- **GitHub Pages 404 문제**: Deploy site 빌드는 성공하지만 `https://kist-primal.github.io`에서 404가 뜸. Deploy 단계의 상세 로그 확인이 필요. GitHub Pages Settings에서 Source가 "GitHub Actions"로 설정되어 있는지 재확인 필요. deploy.yml 워크플로우가 실제로 GitHub Pages에 artifact를 업로드하는지 확인 필요.
- **디자인 커스터마이징 미완**: 빌드/배포 문제 해결 후 디자인 다듬기 진행 예정

---

## 원하는 디자인 방향

사용자가 원하는 홈페이지 디자인은 아래와 같은 **모던하고 깔끔한 스타일**입니다. (참고: urobot.kaist.ac.kr 과 유사한 느낌)

### 핵심 디자인 요소

1. **Hero 섹션 (메인 페이지 상단)**
   - 풀 와이드 그라데이션 배경: `linear-gradient(135deg, #1a1a2e 0%, #2d3a8c 50%, #5b6abf 100%)`
   - 흰색 텍스트, 큰 타이틀 (font-weight: 800)
   - "KAIST School of Computing" 같은 소속 서브텍스트 (uppercase, letter-spacing)
   - "Our Research →", "Publications" 두 개의 CTA 버튼
   - 연구실 한 줄 소개: "We build intelligent robots that perceive, reason, and act in complex real-world environments."

2. **네비게이션 바**
   - 상단 고정 (sticky)
   - 글래스모피즘 효과: `background: rgba(255,255,255,0.85)`, `backdrop-filter: blur(12px)`
   - 연구실 이름에 그라데이션 텍스트 효과
   - 활성 탭에 `#eef0ff` 배경 + `#2d3a8c` 텍스트 색상
   - 네비게이션 순서: Home, Research, Publications, Members, Contact

3. **카드형 레이아웃**
   - 모든 콘텐츠 블록에 `border-radius: 14px`, `box-shadow: 0 2px 12px rgba(0,0,0,0.06)`
   - hover 시 `translateY(-4px)` 애니메이션
   - 연구 분야 카드: 왼쪽 4px 파란 보더, 이모지 아이콘
   - 멤버 카드: 원형 프로필 이미지, 이름 + 역할 텍스트

4. **색상 팔레트**
   - Primary: `#2d3a8c` (짙은 파랑)
   - Primary Light: `#5b6abf` (밝은 파랑)
   - Accent: `#eef0ff` (연한 파랑 배경)
   - Background: `#fafbfe` (거의 흰색)
   - Text: `#1a1a2e` (거의 검정)
   - Text Light: `#555`
   - Footer: `#1a1a2e` (어두운 배경)

5. **Research Areas 섹션**
   - `#f0f2f8` 배경 영역
   - 3열 그리드 카드 (반응형)
   - 각 카드: 이모지 아이콘 + 제목 + 설명
   - 샘플 연구 분야: Autonomous Navigation, Multi-Robot Systems, 3D Scene Understanding

6. **Publications 페이지**
   - 카드형 목록 (각 논문이 하나의 카드)
   - Journal/Conference 뱃지 (둥근 pill 형태)
   - PDF, BibTeX, Code 버튼
   - BibTeX 자동 파싱 (Al-Folio 기본 기능 활용)

7. **Members 페이지**
   - 역할별 그룹 분류 (PI, Ph.D., M.S., Intern, Alumni)
   - 카드형 그리드 레이아웃
   - 원형 프로필 사진 + 이름 + 역할
   - Alumni는 테이블 형태

8. **Contact 페이지**
   - 2열 카드: Location + Email/Prospective Students

9. **Footer**
   - `#1a1a2e` 배경, 연한 흰색 텍스트

---

## 파일별 상세 설명

### 1. `_config.yml`
원본 Al-Folio 설정을 기반으로 아래만 변경:
- `title`: `ARI Lab` (← 나중에 실제 연구실 이름으로 변경 예정)
- `first_name`: `Autonomous Robotics &`
- `last_name`: `Intelligence Laboratory`
- `url`: `https://kist-primal.github.io`
- `baseurl`: (빈 값 — 원본은 `/al-folio`)
- `icon`: `🤖`
- `footer_fixed`: `false`
- `blog_name`: `News`
- `external_sources`: (빈 값 — 원본의 medium/google 예시 제거)
- `scholar.last_name`: `[Kim]`
- `scholar.first_name`: `[Minjun]`
- `enable_darkmode`: `false`
- `last_updated`: `true`
- **중요**: plugins, collections, third_party_libraries 등은 원본 그대로 유지해야 빌드 에러가 안 남

### 2. `_sass/_custom.scss`
Al-Folio의 `@use` 모듈 시스템과 호환되는 커스텀 스타일:
- `@extend` 대신 `@mixin card-base` 사용 (파일 간 @extend 불가)
- `assets/css/main.scss` 맨 끝에 `@use "custom";`으로 연결됨
- Hero 섹션, 네비바, 카드, Publications, People, Contact, Footer 스타일 포함
- 전체 폭 확장을 위한 `margin-left: calc(-50vw + 50%)` 트릭 사용

### 3. `_pages/about.md`
- layout: about
- Hero 섹션: raw HTML로 작성 (hero-section 클래스)
- Research Areas: 3개 카드 (research-areas, research-card 클래스)
- `news: true`, `selected_papers: true` 활성화

### 4. `_pages/people.md`
- layout: page
- HTML 기반 카드 그리드 (people-grid, person-card 클래스)
- PI, Ph.D., M.S., Intern, Alumni 섹션
- 프로필 이미지 경로: `/assets/img/members/`
- nav_order: 4

### 5. `_pages/contact.md`
- layout: page
- 2열 카드 레이아웃 (contact-card 클래스)
- Location + Email/Prospective Students
- nav_order: 5

### 6. `_bibliography/papers.bib`
- 샘플 논문 4편 (BibTeX 형식)
- `selected={true}`, `abbr`, `bibtex_show`, `pdf`, `code`, `abstract`, `preview` 필드 사용
- 모든 데이터는 샘플이며 나중에 실제 논문으로 교체 예정

---

## 기술적 주의사항

1. **Al-Folio 최신 버전은 `@use` 모듈 시스템 사용**: `@import`가 아닌 `@use`로 SCSS 파일을 연결해야 함
2. **`_config.yml`은 원본 기반 최소 수정**: 플러그인 목록(`jekyll-archives-v2`, `jekyll-3rd-party-libraries` 등)을 임의로 변경하면 빌드 에러 발생
3. **GitHub Pages Source**: Settings → Pages에서 **GitHub Actions**로 설정되어야 함
4. **baseurl은 비워야 함**: organization.github.io 레포이므로 baseurl이 비어있어야 루트에서 서빙됨
5. **빌드 확인**: GitHub Actions → "Deploy site" 워크플로우에서 성공 여부 확인

---

## 앞으로 해야 할 작업 (우선순위 순)

1. **404 문제 해결**: deploy.yml 워크플로우가 실제로 GitHub Pages에 배포하는지 확인. `actions/deploy-pages` 액션이 제대로 동작하는지, GitHub Pages environment가 설정되어 있는지 확인
2. **로컬 빌드 테스트**: `docker compose up` 또는 `bundle exec jekyll serve`로 로컬에서 먼저 확인
3. **디자인 미세 조정**: Hero 섹션이 Al-Folio의 about 레이아웃과 잘 맞물리는지 확인, 필요시 레이아웃 파일 수정
4. **실제 콘텐츠 교체**: 연구실 이름, PI 이름, 연구 분야, 논문, 멤버 정보를 실제 데이터로 교체
5. **멤버 프로필 사진 추가**: `assets/img/members/` 폴더에 이미지 파일 추가
6. **Research 전용 페이지 생성**: `_pages/research.md` 추가 (현재는 about.md에 프리뷰만 있음)
7. **News 항목 추가**: `_news/` 폴더에 마크다운 파일 생성

---

## 사용자 요구사항 요약

- 간단하게 쓸 수 있으면서 조정도 가능해야 함
- 원하는대로 개발도 가능하면서 유지보수는 간단해야 함
- 모던하고 깔끔한 디자인 (프로토타입 참고)
- Al-Folio 기본 기능 최대한 활용 (BibTeX 파싱, 뉴스, 프로젝트 등)
- 현재 콘텐츠는 모두 샘플이며, 나중에 실제 정보로 교체 예정
