# 연구실 홈페이지 추가 기능 및 완성도 개선 지시서

이 문서는 `CLAUDE_CODE_DESIGN_V2.md`에 추가로 적용할 내용입니다.
기존 수정사항을 먼저 적용한 후, 아래 내용을 순차적으로 구현해주세요.

---

## 8. Gallery (연구실 앨범) 페이지 신규 추가

### 8-1. 네비게이션 추가

네비바에 **"Gallery"** 항목 추가. 위치는 Contact 앞.

```
Home | Research | Publications | Members ▾ | Gallery | Contact
```

### 8-2. 페이지 구조 (`_pages/gallery.md`, permalink: `/gallery/`)

카테고리별로 사진을 분류해서 보여주는 페이지 (카테고리는 간결하게 유지):

```
Gallery
├── Lab Life        (연구실 일상, 단체사진, 회식, 워크숍 등)
└── Conferences     (학회 참석, 발표 사진)
```

※ Equipment(장비)와 Facilities(연구실 공간)은 Gallery가 아닌 **Research 페이지** 하단에 배치합니다 (10-4 참고).

### 8-3. 디자인 & 기능

**필터 탭**: 상단에 카테고리 필터 버튼 (All / Lab Life / Conferences)

- 탭 스타일: pill 형태 버튼, 활성 탭 `background: #2d3a8c`, `color: white`
- 탭 클릭 시 해당 카테고리 사진만 필터링 (CSS + JS 또는 isotope/masonry 활용)

**사진 그리드**:

- Masonry 레이아웃 (Al-Folio에 masonry.js가 이미 포함되어 있음)
- 사진 hover 시: 살짝 확대(`scale(1.03)`) + 오버레이에 캡션 텍스트 표시
- 사진 클릭 시: Lightbox로 큰 이미지 보기 (Al-Folio에 lightbox2가 이미 포함되어 있음)
- 각 사진에 날짜 + 간단한 캡션

**스타일**:

- 사진 카드: `border-radius: 12px`, `overflow: hidden`
- 이미지 위에 그라데이션 오버레이 (하단에서 올라오는): `linear-gradient(transparent 60%, rgba(0,0,0,0.6))`
- 오버레이 위에 흰색 캡션 텍스트

### 8-4. 데이터 관리 (`_data/gallery.yml`)

```yaml
- image: /assets/img/gallery/lab_group_2025.jpg
  caption: "2025 Lab Group Photo"
  category: lab-life
  date: 2025-03-01

- image: /assets/img/gallery/icra2025_presentation.jpg
  caption: "ICRA 2025 Oral Presentation - Soyeon Park"
  category: conferences
  date: 2025-05-20

- image: /assets/img/gallery/workshop_2024.jpg
  caption: "2024 Lab Workshop in Jeju"
  category: lab-life
  date: 2024-12-15

- image: /assets/img/gallery/iros2024_group.jpg
  caption: "IROS 2024 - Best Paper Award Ceremony"
  category: conferences
  date: 2024-10-18
```

---

## 9. 검색 기능 활성화

### 9-1. 현재 상태

네비바에 `ctrl+k` 검색 아이콘이 있지만 동작하지 않는 상태.

### 9-2. 수정 방법

Al-Folio는 검색 기능이 내장되어 있습니다. `_config.yml`에서:

```yaml
search_enabled: true # 이미 true로 설정되어 있을 것
```

검색이 동작하지 않는 원인을 확인해주세요:

1. `assets/js/search/` 폴더의 JS 파일이 정상적으로 빌드되는지 확인
2. `search.json` 또는 `search-data.json`이 빌드 시 생성되는지 확인
3. 검색 모달/패널의 CSS가 `_custom.scss`에 의해 깨지지 않았는지 확인
4. 혹시 JS minifier가 검색 관련 JS를 깨뜨린 것은 아닌지 확인

### 9-3. 검색 모달 디자인 (동작 후 다듬기)

검색 모달이 열리면:

- `backdrop-filter: blur(8px)` 배경
- 모달: `border-radius: 16px`, `box-shadow: 0 20px 60px rgba(0,0,0,0.15)`
- 검색 입력창: 큰 글씨 (`font-size: 1.2rem`), `border: none`, `border-bottom: 2px solid #2d3a8c`
- 검색 결과: 카드형 목록, hover 시 `background: #f8f9ff`
- `Ctrl+K` 또는 `/` 키로 열리도록

---

## 10. 완성도 개선을 위한 추가 기능 제안

아래는 우수한 연구실 홈페이지들을 분석하여 도출한 추가 기능들입니다.

### 10-1. Research 페이지에 장비 & 연구실 공간 섹션 추가

현재 Research 페이지에 연구 분야 카드만 있는데, 하단에 추가 섹션을 넣어주세요:

**Equipment & Platforms 섹션**:

- 연구에 사용하는 로봇, 센서, 장비를 카드형으로 표시
- 각 카드: 장비 사진 + 이름 + 간단한 스펙/설명
- 예: "Velodyne VLP-16 LiDAR - 16채널 3D 라이다 센서", "Custom Mobile Robot Platform"
- 2~3열 그리드, hover 시 확대 효과
- `_data/equipment.yml`로 관리:

```yaml
- name: "Custom Mobile Robot Platform"
  image: /assets/img/equipment/robot_platform.jpg
  description: "자체 개발한 자율주행 로봇 플랫폼. ROS2 기반, LiDAR + 카메라 융합 센서 탑재."

- name: "Velodyne VLP-16 LiDAR"
  image: /assets/img/equipment/vlp16.jpg
  description: "16채널 3D LiDAR 센서. 실시간 포인트 클라우드 획득."

- name: "Intel RealSense D455"
  image: /assets/img/equipment/realsense.jpg
  description: "스테레오 뎁스 카메라. RGB-D 데이터 수집용."
```

**Lab Facilities 섹션**:

- 연구실 공간 사진 1~2장 + 간단한 설명
- 넓은 이미지 카드 형태 (전체 폭 또는 2열)
- "Main Lab - Room N1-123", "Robot Testing Area" 등

이 두 섹션은 연구 분야 카드 아래에, 구분선 또는 섹션 타이틀과 함께 배치.

### 10-2. Research 상세 서브페이지

**Contact 페이지 내 또는 별도 섹션**으로 채용/모집 공고:

- 현재 모집 중인 포지션 (Ph.D., M.S., Intern 등)
- 각 포지션별: 연구 주제, 자격 요건, 지원 방법
- 눈에 띄는 배너 또는 카드 디자인 (accent 색상 배경)
- Home 페이지 News 위나 아래에 "We're Hiring!" 배너를 선택적으로 표시 가능

구현: Contact 페이지 하단에 "Open Positions" 섹션 추가, `_data/positions.yml`로 관리

```yaml
positions:
  - title: "Ph.D. Student in Multi-Robot Systems"
    description: "We are looking for a motivated Ph.D. student..."
    requirements: ["Strong programming skills in C++/Python", "Background in robotics or AI"]
    open: true
  - title: "Research Intern (Summer 2025)"
    description: "6-month research internship position..."
    open: true
```

### 10-4. Home 페이지에 동적 카운터/통계

Hero 섹션 아래 또는 Research Areas 위에 연구실 통계 표시:

```
📄 50+ Publications  |  👥 12 Members  |  🏆 8 Awards  |  🤖 5 Robot Platforms
```

- 숫자가 스크롤 시 0에서 올라가는 카운트업 애니메이션
- 스타일: 4열 그리드, 각 항목 중앙 정렬, 큰 숫자 + 작은 레이블

### 10-4. Research 페이지에 프로젝트 상세 서브페이지

현재 Research 페이지는 3개 분야의 요약만 있는데, 각 연구 분야를 클릭하면 **상세 페이지**로 이동:

- 연구 배경 및 목표 상세 설명
- 관련 논문 목록 (자동 연결)
- 관련 프로젝트 데모 영상 (YouTube embed)
- 협력 기관/기업 로고
- 사용 장비/기술 스택

구현: `_projects/` 폴더에 각 연구 분야별 마크다운 파일 생성

### 10-5. 논문 하이라이트 / Featured Research

Home 페이지의 "Selected Publications" 위에 **Featured Research** 섹션:

- 최근 대표 논문 1~2개를 큰 카드로 하이라이트
- 논문 제목 + 한 줄 요약 + 대표 이미지/figure + 학회 뱃지
- 링크: Paper, Code, Video, Project Page
- 카드 디자인: 이미지 좌측, 텍스트 우측의 넓은 카드 형태

### 10-6. 타임라인 / Lab History

연구실의 주요 이정표를 타임라인으로 표시 (About 페이지 또는 별도 페이지):

```
2025 ── ICRA 2025 논문 2편 발표
2024 ── IROS 2024 Best Paper Award
2024 ── 첫 번째 로봇 플랫폼 완성
2023 ── 연구실 설립
```

- 세로 타임라인 디자인 (가운데 선 + 좌우 교차 이벤트)
- 스크롤 시 각 이벤트가 순차적으로 등장하는 애니메이션

### 10-7. 소셜 미디어 / 외부 링크 강화

Footer 또는 네비바에:

- GitHub Organization 링크
- Google Scholar 프로필
- YouTube 채널 (데모 영상 등)
- Twitter/X 계정 (선택)
- 각 링크를 Font Awesome 아이콘으로 표시

### 10-8. 반응형 & 모바일 최적화 확인

모든 페이지가 모바일에서도 잘 보이는지 확인:

- Hero 섹션: 모바일에서 타이틀 `font-size` 축소 (`1.6rem`)
- 카드 그리드: 모바일에서 1열로
- 네비바: 모바일 햄버거 메뉴 동작 확인 (드롭다운 포함)
- Gallery: 모바일에서 2열 또는 1열 그리드
- 테이블(Alumni): 모바일에서 스크롤 가능하도록

### 10-9. SEO & 메타 태그

- 각 페이지에 적절한 `title`, `description` meta 태그
- Open Graph 이미지 설정 (SNS에서 링크 공유 시 미리보기)
- `_config.yml`에서 `serve_og_meta: true` 활성화
- 기본 OG 이미지: 연구실 로고 또는 대표 이미지를 `og_image`에 설정

### 10-10. 404 에러 페이지 커스터마이징

Al-Folio의 기본 404 페이지를 커스터마이징:

- 연구실 브랜딩에 맞는 디자인
- "홈으로 돌아가기" 버튼
- 검색 기능 연결

---

## 네비게이션 최종 구조

```
Home | Research | Publications | Members ▾ | Gallery | Contact
                                  ├── Advisor
                                  └── Members
```

Research 페이지 내부 구조:

```
Research
├── 연구 분야 카드 (3개, 각각 클릭 시 상세 서브페이지)
├── Equipment & Platforms (장비 카드 그리드)
└── Lab Facilities (연구실 공간 사진)
```

---

## 구현 우선순위 (기존 V2 지시서 이후)

1. **검색 기능 활성화** (기존 기능 수리이므로 빠름)
2. **Gallery 페이지** (Lab Life + Conferences)
3. **Research 페이지에 Equipment & Facilities 섹션 추가**
4. **Home 통계 카운터**
5. **Open Positions 섹션** (Contact에 추가)
6. **Research 상세 서브페이지**
7. **타임라인** (선택)
8. **SEO & 메타 태그**
9. **404 페이지 커스터마이징**
10. **반응형 모바일 최적화 최종 점검**

---

## 참고: 벤치마킹한 우수 연구실 홈페이지 특징

분석 기반으로 도출한 공통 요소:

- **일관된 색상 테마**: 모든 페이지에 동일한 primary color 적용
- **풍부한 시각 자료**: 로봇/연구 관련 사진이 곳곳에 배치
- **명확한 정보 계층**: 한눈에 연구실이 뭘 하는지, 누가 있는지, 어떤 성과가 있는지 파악 가능
- **최신 뉴스 강조**: 홈에서 최근 논문 accept, 수상, 새 멤버 등을 바로 확인
- **쉬운 콘텐츠 업데이트**: YAML/Markdown 기반으로 비개발자도 수정 가능
- **빠른 로딩**: 이미지 최적화, lazy loading 활용
