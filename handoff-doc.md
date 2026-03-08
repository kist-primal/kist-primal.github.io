# PIER LAB 홈페이지 수정 지시서 (Claude Code용)

## 프로젝트 개요

- **레포지토리**: `kist-pier.github.io` (GitHub Pages)
- **템플릿**: al-folio (Jekyll 기반 학술 연구실 테마)
- **연구실**: PIER LAB (Physical Intelligence & Embodied Robotics Lab)
- **소속**: KIST (Korea Institute of Science and Technology) - Center for Humanoid Research, AI and Robot Institute
- **PI (지도교수)**: 장근우 (Keunwoo Jang), Ph.D., Senior Researcher
  - 이메일: jang90@kist.re.kr
  - GitHub: jkw0701
  - Google Scholar: https://scholar.google.com/citations?hl=ko&user=WveMircAAAAJ&view_op=list_works&sortby=pubdate

---

## 수정 작업 목록 (총 7건)

---

### 작업 1: 네비게이션 바 로고 및 텍스트 크기 확대

**현재 상태**: 좌측 상단의 PIER LAB 로고 이미지와 "PIER LAB" 텍스트가 작아서 잘 보이지 않음. 그 옆에 "KIST"라는 작은 부가 텍스트도 있음.

**수정 요청**:
- 로고 이미지의 크기를 현재 네비게이션 바의 높이에 맞게 최대한 키울 것 (네비바 내 여백 공간을 활용)
- "PIER LAB" 텍스트의 폰트 크기도 비례하여 키울 것
- 전체적으로 네비바 안에서 시각적으로 잘 인식되도록 조정
- 로고와 텍스트가 너무 크거나 네비바를 넘어가지 않도록 적절한 비율 유지

**수정 위치 (추정)**:
- `_includes/header.html` 또는 `_layouts/default.html` 내 navbar 관련 부분
- `_sass/` 디렉토리 내 navbar 관련 SCSS 파일 (예: `_sass/_base.scss`, `_sass/_layout.scss` 등)
- 로고 이미지 자체: `assets/img/` 디렉토리 내 로고 파일

**구체적 방법**:
- navbar의 `.navbar-brand img`의 `height`/`max-height` 값을 키움 (예: 30px → 45~50px)
- `.navbar-brand` 텍스트의 `font-size`를 키움
- 필요시 navbar 자체의 `padding` 조정

---

### 작업 2: 콘텐츠 영역 너비 분석 및 확장

**현재 상태**: 모든 페이지에서 텍스트와 콘텐츠가 화면 전체를 사용하지 않고 좁은 중앙 영역에만 표시됨. 네비바의 PIER LAB 좌측 끝선을 기준으로 아래 콘텐츠도 그 영역 안에서만 작성되어 있어 양쪽에 넓은 여백이 존재함.

**분석 요청**:
- al-folio 템플릿은 Bootstrap의 `container` 클래스를 사용하여 콘텐츠 최대 너비를 제한하는 구조임
- `_config.yml` 또는 SCSS 파일에서 `max-width`, `container` 관련 설정을 확인
- 현재 적용된 `max-width` 값이 무엇인지 파악

**수정 요청**:
- 콘텐츠 영역의 `max-width`를 더 넓게 설정 (예: 800px → 1100~1200px 또는 적절한 값)
- 단, 가독성이 떨어지지 않도록 과도하게 넓히지는 말 것
- 모든 페이지(Home, Research, Publications, Members, Gallery, Contact)에 일관되게 적용

**수정 위치 (추정)**:
- `_sass/_base.scss` 또는 `_sass/_layout.scss`에서 `.container`, `.page-content`, `main` 등의 `max-width` 속성
- al-folio에서는 보통 `_sass/_base.scss`에 `max-width: 800px` 같은 설정이 있음
- `_config.yml`에 `max_width` 설정이 있을 수도 있음

**주의**: 이 변경이 모바일 반응형 레이아웃에 영향을 주지 않도록 미디어 쿼리도 함께 확인할 것.

**분석 결과를 먼저 보고한 뒤 수정을 진행할 것.**

---

### 작업 3: 홈 화면 히어로 섹션 텍스트 및 버튼 수정

**현재 상태**:
- "Physical Intelligence & Embodied Robotics Lab" 제목은 흰색 + 파란색 앞글자로 잘 표현되어 있음
- 그 아래 설명 텍스트 ("We study how robots can physically interact with...") 가 **검정색**이라 어두운 배경에서 잘 보이지 않음
- "Our Research" 버튼은 흰색 배경의 박스 형태로 존재
- "Publications" 는 텍스트만 있고 박스(버튼)가 없음

**수정 요청**:

(A) **설명 텍스트 색상 변경**:
- 히어로 섹션 내 설명 텍스트 ("We study how robots can..." 부분)를 **흰색(#FFFFFF)** 또는 밝은 회색으로 변경
- 상단 소속 텍스트 ("KIST | KOREA INSTITUTE OF SCIENCE AND TECHNOLOGY...")도 같이 흰색으로 확인/변경

(B) **Publications 버튼 추가**:
- "Publications" 텍스트에 버튼 박스를 추가
- **"Our Research" 버튼과 다른 스타일로**: 내부가 채워지지 않은 (transparent) 흰색 outline 버튼으로 만들 것
  - 즉, 흰색 테두리(border) + 투명 배경 + 흰색 텍스트
  - hover 시 흰색 배경 + 어두운 텍스트로 변환되는 효과 추가하면 좋음
- "Our Research"는 기존대로 흰색 배경의 채워진(solid) 버튼 유지

**수정 위치 (추정)**:
- 홈 페이지: `_pages/about.md` 또는 `_layouts/about.html`
- 히어로 섹션 관련 SCSS/CSS
- 버튼 스타일: `_sass/` 내 관련 파일

---

### 작업 4: 홈 화면 News 섹션 실제 내용으로 업데이트

**현재 상태**: News 섹션에 일부 내용이 있으나 실제 연구실 활동을 충분히 반영하지 못함.

**수정 요청**: 아래 내용을 기반으로 News 항목들을 작성하여 `_news/` 디렉토리에 마크다운 파일로 추가할 것. al-folio에서는 `_news/` 폴더 안에 개별 `.md` 파일을 만들면 자동으로 홈 화면에 표시됨.

**반영해야 할 실제 뉴스 내용** (스크린샷 및 웹 조사 기반):

| 날짜 | 내용 |
|------|------|
| Nov 15, 2025 | Paper "Robust LiDAR-Visual SLAM in Dynamic Environments" accepted to **IEEE RA-L 2025** |
| Sep 01, 2025 | Two papers accepted to **ICRA 2025** — cooperative UAV coverage and multi-robot mapping |
| Mar 02, 2025 | Welcome new M.S. students **Yujin Seo** and **Donghyun Kang** to PIER Lab! |
| 2025 | Paper "Intuitive and Interactive Robotic Avatar System for Tele-Existence: TEAM SNU in the ANA Avatar XPRIZE Finals" published in **International Journal of Social Robotics** |
| Dec 15, 2024 | Best Paper Award at **IROS 2024 Workshop** on Multi-Robot Systems! |
| 2024 | Preprint "Subspace-wise Hybrid Reinforcement Learning for Articulated Object Manipulation" released (arXiv:2412.08522) |
| 2026 (입학시기 확인필요) | Welcome M.S. students **Seungseop Lee** (Yonsei Univ.) and **Namyoon Kim** (Korea Univ.) |

**추가 지시**:
- 위에 기재된 이벤트 외에도 Members 페이지의 학생 정보(입학 시기, 소속 학교)를 참고하여 "Welcome new member" 류의 뉴스를 적절히 추가
- Intern Researchers인 Seungwon Jang (Kwangwoon Univ.), Suhyeon Pyo 등의 합류 소식도 추가
- 날짜순으로 최신이 위에 오도록 정렬
- al-folio의 `_news/` 파일 형식에 맞추어 작성 (frontmatter에 `date`, `inline` 등 포함)

**파일 형식 예시**:
```markdown
---
layout: post
date: 2025-11-15
inline: true
related_posts: false
---

Paper "Robust LiDAR-Visual SLAM in Dynamic Environments" accepted to **IEEE RA-L 2025**!
```

---

### 작업 5: Publications 페이지 — 전체 논문 반영 및 Google Scholar 연동

**현재 상태**: Publications 페이지에 일부 논문만 표시되어 있음. 현재 보이는 논문:
- (2025) Intuitive and Interactive Robotic Avatar System... — IJSR
- (2024) Subspace-wise Hybrid Reinforcement Learning... — arXiv
- (2023) Motion Planning of Mobile Manipulator for Navigation Including Door Traversal — IEEE RA-L
- (2022) Weighted Hierarchical Quadratic Programming... — ISR
- (2021) Reactive Self-Collision Avoidance for a Differentially Driven Mobile Manipulator — Sensors
- (2019) Continuous Task Transition Approach... — IEEE RA-L

**수정 요청**:

**(A) 누락된 논문 추가**: Google Scholar (https://scholar.google.com/citations?hl=ko&user=WveMircAAAAJ) 에서 Keunwoo Jang 박사의 전체 논문 목록을 확인하여 `_bibliography/papers.bib` 파일에 BibTeX 형식으로 모두 추가할 것.

추가로 확인된 논문들 (dblp 기반):
- SangHyun Kim, **Keunwoo Jang**, et al., "Whole-body Control of Non-holonomic Mobile Manipulator Based on Hierarchical Quadratic Programming and Continuous Task Transition", **ICARM 2019**, pp. 414-419
- 기타 Google Scholar에서 확인되는 모든 논문

**(B) 자동 연동 설정**:
al-folio는 `jekyll-scholar` 플러그인을 사용하여 `_bibliography/papers.bib` 파일에서 자동으로 publications 페이지를 생성함. 이 기능이 제대로 작동하도록:
1. `_config.yml`에서 `scholar` 관련 설정이 올바른지 확인
2. `_bibliography/papers.bib`에 모든 논문의 BibTeX 엔트리가 포함되어 있는지 확인
3. 연도별 역순 정렬이 되는지 확인
4. 각 논문에 `abbr` (저널/학회 약어 배지), `abstract`, `doi`, `url` 등의 필드가 가능한 한 포함되도록

**(C) Google Scholar 자동 동기화**:
- al-folio 자체에는 Google Scholar 자동 동기화 기능이 내장되어 있지 않음
- 대안: `scholar.py` 또는 `scholarly` Python 라이브러리를 활용한 스크립트를 작성하여 BibTeX를 자동 생성하는 GitHub Action workflow를 추가
- 또는 수동으로 BibTeX를 관리하되, Google Scholar에서 BibTeX를 export하여 주기적으로 업데이트하는 방법을 README에 문서화
- **가능한 경우**: GitHub Actions에 정기적으로 Google Scholar에서 논문 목록을 크롤링하여 `papers.bib`를 업데이트하는 워크플로우를 `.github/workflows/`에 추가

**주의사항**:
- 각 BibTeX 엔트리의 key에 `selected = {true}`를 추가하면 홈 페이지의 "Selected Publications" 섹션에도 표시됨
- 현재 홈 화면에 "Selected Publications" 섹션이 존재하므로, 주요 논문에 `selected = {true}` 표시할 것
- `abbr` 필드로 저널/학회 배지를 표시 (예: `abbr = {RA-L}`, `abbr = {ICRA}`, `abbr = {Sensors}`, `abbr = {ISR}`, `abbr = {arXiv}`, `abbr = {IJSR}`)

---

### 작업 6: Members 페이지 — 프로필 카드 및 사진 크기 확대

**현재 상태**: Members 페이지에 각 학생의 프로필 카드가 있으나 사진이 작아서 잘 보이지 않음.

**현재 멤버 정보** (스크린샷 기반):

**M.S. Students**:
1. **Seungseop Lee (이승섭)** — M.S. Dept. of Mechanical Engineering, Yonsei University (Entered: 2026), B.S. School of Electrical and Computer Engineering, University of Seoul (Graduated: 2025) — 연구분야: World Model, Reinforcement Learning, Model-based Control
2. **Namyoon Kim (김남윤)** — M.S. Dept. of Mechanical Engineering, Korea University (Entered: 2026), B.S. School of Mechanical Engineering, Korea University (Graduated: 2026) — 연구분야: Visuomotor Policy, Teleoperation

**Intern Researchers**:
1. **Seungwon Jang (장승원)** — B.S. Dept. of Robotics, Kwangwoon University (Graduated: 2026) — 연구분야: Imitation Learning, Reinforcement Learning
2. **Suhyeon Pyo (표수현)** — [학교정보 미표시] — 연구분야: Large Language Models (LLM)

**수정 요청**:
- 프로필 사진 크기를 현재보다 **1.5~2배** 키울 것 (예: 100px → 150~180px)
- 카드 전체의 레이아웃도 사진 크기에 맞게 조정 (카드 높이, 여백 등)
- 텍스트 정보(이름, 직위, 학교, 연구분야)도 가독성 좋게 배치
- 모바일 반응형을 유지할 것

**수정 위치 (추정)**:
- `_pages/people.md` 또는 `_pages/members.md` (Members 페이지 마크다운)
- `_layouts/people.html` 또는 관련 include 파일
- `_data/` 디렉토리 내 멤버 데이터 파일 (al-folio는 보통 `_data/` 아래 YAML로 관리)
- 프로필 이미지 관련 CSS/SCSS (이미지 width, height, border-radius 등)

---

### 작업 7: Gallery 페이지 수정 (정렬, 텍스트 가시성, 라이트박스)

**현재 상태**:
- Gallery에 "All", "Lab Life", "Conferences" 카테고리 필터가 있음
- 사진에 마우스를 올리면 오버레이로 제목/설명이 표시됨
- 오버레이 내 **날짜 텍스트가 검정색**이라 어두운 오버레이에서 잘 보이지 않음
- 사진 클릭 시 라이트박스(큰 화면)로 열리나, 해당 화면에서 설명 텍스트의 위치와 가시성이 좋지 않음
- 사진들의 정렬 순서가 날짜 기준이 아님

**수정 요청**:

**(A) 날짜순 정렬**:
- 모든 카테고리 (All, Lab Life, Conferences)에서 **최신 날짜가 먼저** 오도록 정렬
- 좌측 상단부터 우측으로, 그 다음 줄로 이어지는 순서
- Gallery 데이터 파일(예: `_data/gallery.yml` 또는 `_gallery/` 폴더)의 날짜 필드를 기준으로 역순 정렬

**(B) 오버레이 날짜 텍스트 색상 수정**:
- 사진 호버 시 표시되는 날짜 텍스트를 **흰색(#FFFFFF)** 또는 밝은 색상으로 변경
- 설명 텍스트와 날짜가 시각적으로 구분되면 더 좋음 (예: 날짜는 연한 회색, 설명은 흰색 / 또는 날짜는 작은 폰트 크기)

**(C) 라이트박스 내 설명 텍스트 개선**:
- 사진을 클릭하여 크게 볼 때, 설명 텍스트(캡션)가 사진 하단에 **반투명 배경** 위에 표시되도록 수정
- 텍스트가 사진을 크게 가리지 않으면서도 잘 보이도록:
  - 사진 하단 또는 하단 바깥에 캡션 영역을 배치
  - 반투명 검정 배경 (예: `rgba(0,0,0,0.6)`) + 흰색 텍스트
  - 날짜 + 설명 + 카테고리 정보가 깔끔하게 표시

**수정 위치 (추정)**:
- Gallery 페이지: `_pages/gallery.md`
- Gallery 레이아웃/컴포넌트: `_includes/gallery.html` 또는 관련 파일
- Gallery 데이터: `_data/gallery.yml` (이미지 목록, 날짜, 설명, 카테고리)
- CSS/SCSS: 오버레이 스타일, 라이트박스 스타일 관련 파일
- JavaScript: 정렬 로직, 라이트박스 플러그인 관련

---

## 추가 참고사항

### al-folio 프로젝트 구조 (주요 파일/디렉토리)

```
kist-pier.github.io/
├── _config.yml              # 사이트 전체 설정
├── _bibliography/
│   └── papers.bib           # BibTeX 논문 데이터 (Publications 자동생성)
├── _data/
│   ├── coauthors.yml        # 공저자 정보
│   └── (기타 데이터 파일)
├── _includes/
│   ├── header.html          # 네비게이션 바
│   └── (기타 컴포넌트)
├── _layouts/
│   ├── about.html           # 홈 페이지 레이아웃
│   ├── page.html            # 일반 페이지 레이아웃
│   └── (기타 레이아웃)
├── _news/                   # 뉴스 항목 (각 .md 파일)
├── _pages/
│   ├── about.md             # 홈 페이지 내용
│   ├── publications.md      # Publications 페이지
│   ├── people.md            # Members 페이지
│   └── gallery.md           # Gallery 페이지
├── _sass/                   # SCSS 스타일 파일들
│   ├── _base.scss
│   ├── _layout.scss
│   └── _themes.scss
├── assets/
│   ├── img/                 # 이미지 파일들 (로고, 멤버 사진, 갤러리 등)
│   ├── css/
│   └── js/
└── .github/workflows/       # GitHub Actions 워크플로우
```

### 작업 순서 권장

1. **작업 2** (콘텐츠 영역 분석) — 먼저 구조를 파악
2. **작업 1** (로고 크기) — 빠르게 수정 가능
3. **작업 3** (히어로 섹션) — CSS + HTML 수정
4. **작업 6** (Members 사진 크기) — CSS 수정
5. **작업 7** (Gallery) — CSS + JS + 데이터 수정
6. **작업 4** (News) — 콘텐츠 추가
7. **작업 5** (Publications) — 가장 시간이 많이 소요 (BibTeX 수집 + 설정)

### 작업 시 주의사항

1. **로컬 빌드 테스트**: 각 수정 후 `bundle exec jekyll serve`로 로컬에서 확인한 뒤 push
2. **반응형 확인**: 모바일/태블릿 화면에서도 레이아웃이 깨지지 않는지 확인
3. **다크모드**: al-folio는 라이트/다크 모드를 지원하므로 두 모드에서 모두 정상 표시되는지 확인
4. **Git 커밋**: 각 작업별로 의미 있는 커밋 메시지와 함께 개별 커밋할 것
5. **기존 스타일 유지**: 기존 테마의 디자인 언어(색상 팔레트, 폰트 등)를 유지하면서 수정
6. **Google Scholar 크롤링**: robots.txt로 인해 직접 크롤링이 어려울 수 있음. 이 경우 수동으로 BibTeX를 Google Scholar에서 export하는 방법을 안내할 것

---

## 핵심 요약 (Quick Reference)

| # | 작업 | 핵심 파일 | 난이도 |
|---|------|----------|--------|
| 1 | 로고/텍스트 크기 확대 | header.html, SCSS | 낮음 |
| 2 | 콘텐츠 영역 너비 확장 | _sass/_base.scss | 낮음 |
| 3 | 히어로 텍스트 흰색 + 버튼 | about.md/html, SCSS | 중간 |
| 4 | News 실제 내용 추가 | _news/*.md | 낮음 |
| 5 | Publications 전체 논문 + 연동 | papers.bib, _config.yml | 높음 |
| 6 | Members 사진 크기 확대 | people 레이아웃, SCSS | 낮음 |
| 7 | Gallery 정렬/색상/라이트박스 | gallery 관련 파일들 | 중간 |
