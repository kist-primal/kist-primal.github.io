# 최종 업데이트 지시서

이 문서는 기존 지시서(V2, V3)에 추가/수정되는 내용입니다.
**이 문서의 내용이 기존 지시서와 충돌할 경우, 이 문서를 우선합니다.**

---

## 1. 연구실 기본 정보 변경 (전체 사이트 반영)

### 연구실 이름 변경

- **약칭**: PIER Lab
- **정식 명칭**: Physical Intelligence & Embodied Robotics Laboratory
  - (원래 "Embodied"를 살리되, "Intelligence"를 형용사가 아닌 명사로 두어 자연스럽게 구성)
  - 대안 후보 (Claude Code가 판단해서 가장 자연스러운 것 선택 가능):
    - Physical Intelligence & Embodied Robotics Laboratory
    - Physical Intelligence for Embodied Robotics Laboratory
    - Physically Intelligent Embodied Robotics Laboratory
  - **핵심: "PIER"의 약어가 자연스럽게 성립해야 함**

### 소속 기관 변경

- **KAIST가 아닌 KIST** (Korea Institute of Science and Technology, 한국과학기술연구원)
- KIST는 대학이 아닌 **정부출연 연구기관**입니다
- 따라서 "School of Computing" 같은 표현은 부적절
- Hero 섹션 소속 텍스트: "KIST (Korea Institute of Science and Technology)" 또는 적절한 센터/부서명으로 변경
- footer, contact, 기타 모든 곳에서 KAIST → KIST로 일괄 변경
- 주소도 KIST 주소로 변경: "5 Hwarang-ro 14-gil, Seongbuk-gu, Seoul 02792, South Korea"

### 변경해야 할 파일들

- `_config.yml`: title, first_name, last_name, description, footer_text, url 관련
- `_pages/about.md`: Hero 섹션 텍스트 전체
- `_pages/contact.md`: 주소, 이메일
- `_sass/_custom.scss`: 주석 등
- `_data/members.yml`: 소속 정보
- 네비바 로고 텍스트: "PIER Lab" + "KIST" 서브텍스트
- 모든 파일에서 "ARI Lab" → "PIER Lab", "KAIST" → "KIST" 일괄 치환

---

## 2. 전체 톤 & 분위기 조정

### 장난스럽지 않은 전문적 톤

현재 사이트에 이모지(🤖🔗🌐📢📍📬🎓 등)가 많이 사용되고 있는데, **이모지를 제거하거나 최소화**하세요.

**제거할 것들**:

- Research 카드의 이모지 아이콘 → 대신 Font Awesome 또는 SVG 아이콘 사용 (선이 깔끔한 아이콘)
- News 섹션의 📢 이모지 → 섹션 제목만으로 충분
- Contact의 📍📬🎓 이모지 → Font Awesome 아이콘으로 교체 (`fa-map-marker-alt`, `fa-envelope`, `fa-user-graduate`)
- favicon의 🤖 이모지 → PIER Lab 텍스트 로고 또는 심플한 아이콘으로 변경

**유지할 톤**:

- 학술적이고 신뢰감 있는 느낌
- 색상은 기존 팔레트 유지 (`#2d3a8c` 계열) — 충분히 전문적임
- 폰트, 여백, 카드 스타일은 기존 프로토타입 느낌 유지
- 인터랙션은 부드럽고 절제된 수준으로 (과하지 않게)

---

## 3. Members 페이지 레이아웃 변경

### 한 행에 한 명 (1열 레이아웃)

기존 지시서(V2)에서 2~3열 카드 그리드로 지시했지만, **1열 레이아웃으로 변경**합니다.

**Ph.D. / M.S. 학생 카드 레이아웃**:

- 한 행에 한 명씩, 전체 너비 카드
- 카드 내부: 좌측에 프로필 사진 (원형, 약 120px) + 우측에 정보
- 정보 영역: 이름, 과정, 대학원, 학부 출신, 연구 분야 태그, 링크 아이콘
- `max-width: 700px~800px`, 중앙 정렬
- 카드 간 간격: `margin-bottom: 24px`

```
┌─────────────────────────────────────────────────┐
│  ┌──────┐  이름 (한글 + 영문)                      │
│  │ 사진  │  Ph.D. Candidate                       │
│  │      │  KIST | 학부: OO대학교 OO학과              │
│  └──────┘  연구: [SLAM] [Visual Nav] [LiDAR]      │
│            📧 🎓 🐙                               │
└─────────────────────────────────────────────────┘
```

(위 이모지는 실제로는 Font Awesome 아이콘으로: `fa-envelope`, `fa-graduation-cap`, `fa-github`)

**Research Interns / Undergraduate도 동일한 1열 레이아웃** (정보는 약간 간소화)

### 스크롤 인터랙션 (1열에 최적화)

1열 레이아웃이므로 스크롤 시 한 명씩 자연스럽게 등장하는 효과가 더 잘 어울림:

- 각 카드가 `opacity: 0`, `transform: translateY(30px)` 상태에서
- 뷰포트에 들어오면 `opacity: 1`, `transform: translateY(0)` 으로 전환
- `transition: 0.6s cubic-bezier(0.4, 0, 0.2, 1)`
- 카드가 하나씩 나타나므로 stagger delay 불필요 (자연스럽게 스크롤에 따라 등장)
- 과하지 않고 부드럽게. 한 번 등장한 카드는 다시 사라지지 않음 (observer.unobserve)

### Alumni는 기존대로

- 사진 없이 테이블 또는 심플 리스트
- 1열 레이아웃과 자연스럽게 이어지도록

---

## 4. 검색 기능 반드시 동작하게

### 중요도: 높음

상단 네비바의 검색 (`ctrl+k`)이 **반드시 실제로 동작**해야 합니다.

확인 및 수정 순서:

1. `_config.yml`에서 `search_enabled: true` 확인
2. 빌드 시 `assets/js/search/` 관련 파일들이 정상 생성되는지 확인
3. `search.json` 데이터 파일이 빌드 output에 포함되는지 확인
4. 검색 모달이 열리는 JS 이벤트 바인딩 확인
5. `_custom.scss`가 검색 모달의 CSS를 덮어쓰지 않는지 확인
6. 콘솔 에러 확인 (빌드 후 로컬 테스트 권장)

검색 대상: Publications 논문 제목/저자, News, 페이지 제목/내용 등

### Publications 필터도 동작 확인

Publications 페이지의 "Type to filter" 검색바도 실제로 동작해야 합니다:

- 논문 제목, 저자, 학회명으로 필터링
- 입력 시 실시간으로 목록이 필터링되는지 확인

---

## 5. 샘플 데이터 참고사항

현재 모든 콘텐츠는 샘플이며 나중에 실제 데이터로 교체 예정입니다.
하지만 샘플 데이터도 **PIER Lab / KIST에 맞게 일관성 있게** 작성해주세요:

- 연구 분야: Embodied AI, Robot Manipulation, Sensor Fusion 등 (Physical Intelligence 관련)
- 학회: IEEE RA-L, ICRA, IROS, CoRL, RSS 등
- 소속: KIST
- 이메일 도메인: `@kist.re.kr`

---

## 6. 변경된 내용 요약 (기존 지시서 대비)

| 항목          | 기존                                          | 변경                                                 |
| ------------- | --------------------------------------------- | ---------------------------------------------------- |
| 연구실 이름   | ARI Lab                                       | PIER Lab                                             |
| 정식 명칭     | Autonomous Robotics & Intelligence Laboratory | Physical Intelligence & Embodied Robotics Laboratory |
| 소속 기관     | KAIST (대학)                                  | KIST (연구기관)                                      |
| 이모지 사용   | 많음                                          | 제거, Font Awesome 아이콘으로 교체                   |
| Members 카드  | 2~3열 그리드                                  | 1열 (한 행에 한 명)                                  |
| 스크롤 효과   | stagger delay                                 | 스크롤에 따라 한 명씩 자연스럽게 등장                |
| 전체 톤       | 캐주얼                                        | 전문적, 학술적 신뢰감                                |
| 검색 기능     | 있으면 좋겠음                                 | 반드시 동작해야 함                                   |
| 이메일 도메인 | @kaist.ac.kr                                  | @kist.re.kr                                          |

---

## 최종 전달 시 Claude Code에 강조할 점

1. **모든 파일에서 ARI Lab → PIER Lab, KAIST → KIST 일괄 치환**
2. **이모지 전부 제거 → Font Awesome 아이콘으로 교체**
3. **Members 1열 레이아웃 + 스크롤 시 한 명씩 등장**
4. **검색 기능(ctrl+k, Publications 필터) 반드시 동작하도록**
5. **전문적이고 절제된 톤 유지**
