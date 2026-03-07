# 연구실 홈페이지 디자인 종합 수정 지시서

## 현재 상태 분석 및 전체 방향

현재 사이트(`https://kist-primal.github.io`)는 기본 구조는 잡혔지만, 전체적으로 **디자인 퀄리티가 부족**합니다. 프로토타입(`DESIGN_PROTOTYPE.jsx`)의 세련된 느낌에 비해 밋밋하고, 깨지는 부분이 있으며, 인터랙션이 없습니다.

**전체 디자인 방향**: 심플하면서도 세련된. 깔끔하되 생동감이 있는. 학술적 신뢰감은 유지하면서 현대적인 웹사이트 느낌.

---

## 1. 전체 공통 수정사항 (모든 페이지)

### 1-1. 인터랙션 & 애니메이션 추가

현재 사이트가 너무 정적입니다. 아래 인터랙션을 전역으로 추가해주세요:

**스크롤 등장 애니메이션 (Scroll Reveal)**:
- 페이지를 스크롤할 때 각 섹션/카드가 아래에서 위로 살짝 올라오면서 fade-in
- CSS로 구현: `@keyframes fadeInUp` + Intersection Observer JS 또는 CSS `animation-timeline: view()`
- 너무 과하지 않게: `translateY(20px)` → `translateY(0)`, `opacity: 0` → `opacity: 1`, `duration: 0.5s`
- 카드가 여러 개일 때 순차적으로 등장 (stagger): 각 카드에 `animation-delay`를 0.1s씩 증가

**호버 효과 강화**:
- 모든 카드: `transform: translateY(-6px)` + `box-shadow` 강화 (현재보다 더 눈에 띄게)
- 버튼: 배경색 전환 + 살짝 확대 (`scale(1.02)`)
- 네비게이션 링크: 부드러운 밑줄 또는 배경색 전환
- 모든 transition은 `0.3s ease` 또는 `0.3s cubic-bezier(0.4, 0, 0.2, 1)` 사용

### 1-2. 타이포그래피 & 가독성

- 본문 텍스트 line-height: `1.7` 이상
- 섹션 제목: `font-weight: 800`, 충분한 margin-bottom
- 작은 텍스트(설명, 역할 등)도 최소 `font-size: 0.85rem` 이상, 색상 `#555` (너무 흐리지 않게)

### 1-3. 버튼 퀄리티 개선

현재 버튼들이 기본 스타일이라 저퀄리티로 보입니다:
- Hero CTA 버튼: `padding: 14px 32px`, `border-radius: 12px`, `font-weight: 600`, hover 시 `transform: translateY(-2px)` + `box-shadow: 0 4px 15px rgba(45, 58, 140, 0.3)`
- Publications의 ABS/BIB/PDF/CODE 버튼: `border-radius: 8px`, `padding: 6px 14px`, `font-size: 0.8rem`, hover 시 `background: #2d3a8c`, `color: white`, `border-color: #2d3a8c` 전환
- 모든 버튼에 `transition: all 0.25s ease` 적용

### 1-4. 네비게이션 바

현재 네비바가 프로토타입의 글래스모피즘 느낌이 약합니다:
- `background: rgba(255,255,255,0.9)`, `backdrop-filter: blur(16px)`
- `border-bottom: 1px solid rgba(0,0,0,0.06)` (현재 너무 진함)
- "ARI Lab" 로고 텍스트에 그라데이션 효과: `background: linear-gradient(135deg, #2d3a8c, #5b6abf)`, `-webkit-background-clip: text`, `-webkit-text-fill-color: transparent`
- "KAIST" 서브텍스트: `font-size: 0.75rem`, `color: #999`, `font-weight: 400`
- 활성 탭: `background: #eef0ff`, `color: #2d3a8c`, `font-weight: 600`, `border-radius: 8px`
- ctrl+k 검색 아이콘 스타일도 다듬기

### 1-5. Footer

- `background: #1a1a2e`
- 텍스트 `color: rgba(255,255,255,0.5)` (현재 핑크색 링크 제거)
- 링크 색상: `rgba(255,255,255,0.6)`, hover 시 `white`
- footer 내부 여백 충분히 (`padding: 3rem 0`)

---

## 2. Home 페이지 수정

### 2-1. Hero 섹션

현재 대체로 구조는 잡혔지만 디테일 부족:
- "KAIST SCHOOL OF COMPUTING" 텍스트: `letter-spacing: 3px`, `font-size: 0.8rem`, `opacity: 0.7`
- 메인 타이틀: `font-size: 2.8rem` (데스크탑), `font-weight: 800`, `line-height: 1.15`
- 설명 텍스트: `font-size: 1.15rem`, `opacity: 0.85`, `max-width: 600px`, `line-height: 1.7`
- 버튼 간격: 두 버튼 사이 `gap: 16px`
- "Our Research →" 버튼: 흰색 배경, `color: #2d3a8c`, `font-weight: 600`, hover 시 `box-shadow` 추가
- "Publications" 버튼: 투명 배경, `border: 2px solid rgba(255,255,255,0.4)`, `color: white`

### 2-2. Research Areas 섹션

현재 카드에 이모지가 아닌 아이콘이 사용되고 있는데, 아이콘이 너무 작고 밋밋함:
- 아이콘 크기 키우기: `font-size: 2rem` 또는 아이콘 배경에 `width: 48px; height: 48px; border-radius: 12px; background: #eef0ff; display: flex; align-items: center; justify-content: center;` 로 감싸기
- 카드 제목: `font-size: 1.1rem`, `font-weight: 700`, `color: #2d3a8c`
- 카드에 hover 시 `border-left-color`가 밝아지는 효과 또는 전체 `box-shadow` 강화
- 3열 그리드가 반응형으로 잘 동작하는지 확인

### 2-3. News 섹션

대체로 괜찮지만:
- 날짜 색상 `#2d3a8c`, `font-weight: 600`
- 각 뉴스 항목 사이 구분선: `border-bottom: 1px solid #eee`
- 볼드 텍스트(학회명 등)가 너무 무겁지 않게: `font-weight: 600` (800이 아닌)

### 2-4. Selected Publications 섹션

- 논문 카드에 `border-radius: 14px`, `box-shadow` 통일
- "slam_preview.pn..." 같은 깨진 이미지 처리: 이미지가 없을 때 graceful fallback (이미지 영역 숨기거나 플레이스홀더)

---

## 3. Research 페이지 수정

현재 세로 목록 형태인데 괜찮지만 디테일 부족:
- 각 연구 카드의 왼쪽 보더: `4px solid #2d3a8c` (현재 적용되어 있지만 색이 연한 것 같으면 진하게)
- "Representative:" 메타 정보 영역: 배경을 `#f8f9ff`로, `border-radius: 8px`, `padding: 10px 16px`
- 카드 간 간격: `gap: 24px`
- 각 카드에 스크롤 등장 애니메이션 적용
- 아이콘 크기와 스타일 통일

---

## 4. Publications 페이지 수정

기능적으로는 잘 동작하지만 디자인 다듬기:
- 각 논문 항목: `border-radius: 14px`, `padding: 24px`, `box-shadow: 0 2px 12px rgba(0,0,0,0.06)`
- 학회 뱃지(RA-L, ICRA 등): 현재 초록색 배경인데, `background: #2d3a8c`, `color: white`, `border-radius: 6px`, `padding: 4px 12px`, `font-size: 0.75rem` 로 통일
- ABS/BIB/PDF/CODE 버튼: 위 1-3에서 설명한 버튼 스타일 적용
- "Type to filter" 검색바: `border-radius: 10px`, `border: 1px solid #e0e0e0`, `padding: 10px 16px`, focus 시 `border-color: #2d3a8c` + `box-shadow: 0 0 0 3px rgba(45,58,140,0.1)`
- 연도 구분선: 현재 괜찮지만 `color: #ccc`로 너무 흐리지 않게
- 깨진 이미지("slam_preview.pn...") 수정: preview 이미지가 없는 경우 해당 영역 숨기기

---

## 5. Members 페이지 대폭 수정 (★ 중요)

현재 기본 카드만 있는데, 구조를 크게 개편해야 합니다.

### 5-1. 페이지 구조 재설계

Members를 **2개의 별도 페이지**로 분리하고, 네비게이션 바에서 드롭다운으로 접근:

```
네비바 "Members" (드롭다운)
  ├── Advisor 페이지 (/people/advisor/) → 교수 한 분의 상세 프로필
  └── Members 페이지 (/people/)         → 학생/인턴/졸업생 목록
```

Members 페이지(학생 목록) 내부 구조:
```
1. Ph.D. Students
2. M.S. Students  
3. Research Interns
4. Undergraduate Students
5. Alumni
```

### 5-2. 네비게이션 드롭다운 구조 (★ 핵심)

**"Members" 네비게이션 항목에 드롭다운 서브메뉴**를 만들어주세요:

```
Members (hover 또는 click 시 드롭다운 열림)
  ├── Advisor       → /people/advisor/   (교수 전용 페이지)
  └── Members       → /people/           (학생 목록 페이지)
```

Al-Folio는 Bootstrap 기반이므로 Bootstrap의 dropdown nav 컴포넌트를 활용하면 됩니다. `_includes/header.liquid` 또는 네비바 관련 파일을 수정해서 "Members" 항목을 dropdown으로 변경해주세요.

드롭다운 스타일:
- `border-radius: 10px`, `box-shadow: 0 4px 20px rgba(0,0,0,0.1)`
- `background: white`, `backdrop-filter: blur(12px)`
- 각 항목: `padding: 8px 20px`, hover 시 `background: #eef0ff`, `color: #2d3a8c`
- 부드럽게 열리는 애니메이션 (fade + 살짝 아래로 슬라이드)

### 5-3. Advisor 페이지 (교수 전용 페이지)

`_pages/advisor.md` 또는 `_pages/people/advisor.md`로 만들어주세요. (`permalink: /people/advisor/`)

이 페이지는 교수님 한 분만을 위한 **상세 프로필 페이지**입니다:
- 상단: 큰 프로필 사진 (원형 또는 라운드 사각형) + 이름/직함/소속
- 소개글 (Biography) 섹션
- 연구 관심사 (Research Interests) 섹션
- 주요 경력 (Career/Experience) 섹션
- 수상 내역 (Awards & Honors) 섹션
- 학력 (Education) 섹션
- 연락처 (Contact) 섹션
- Google Scholar, DBLP, GitHub 등 외부 링크 아이콘

디자인: 깔끔한 1컬럼 레이아웃, 각 섹션 사이에 충분한 여백, 프로필 사진은 상단 중앙 또는 좌측 배치

### 5-4. Members 페이지 (학생 목록 페이지)

`_pages/people.md`를 학생 목록 전용으로 수정. (`permalink: /people/`)

이 페이지에는 교수를 제외한 나머지 멤버만 표시:

### 5-5. 학생 카드 (Ph.D. / M.S.)

각 학생 카드에 들어갈 정보:
- **프로필 사진** (원형, 100px)
- **이름** (한글 + 영문)
- **과정**: Ph.D. Student / M.S. Student / Ph.D. Candidate
- **대학원**: 소속 대학원 (예: KAIST School of Computing)
- **학부 출신**: 학부 대학 + 학과 (예: KAIST 전기및전자공학부)
- **연구 분야**: 키워드 태그 형태 (예: `SLAM`, `Multi-Robot`, `3D Vision`)
- **이메일** (선택)
- **링크들** (Google Scholar, GitHub 등 - 아이콘으로)

카드 레이아웃:
- 2~3열 그리드 (반응형)
- 프로필 사진 상단, 정보 하단 배치
- 연구 분야 태그: `background: #eef0ff`, `color: #2d3a8c`, `border-radius: 20px`, `padding: 4px 12px`, `font-size: 0.75rem`

### 5-6. Research Interns / Undergraduate Students

- 학생 카드와 유사하지만 약간 간소화 (연구 분야, 학교 정도만)
- 프로필 사진 포함

### 5-7. Alumni 섹션

- 사진 없이 **테이블 또는 심플한 리스트** 형태
- 이름 | 학위 (M.S. 2024 등) | 현재 소속 (삼성전자, MIT Postdoc 등)
- 깔끔한 테이블 스타일: `border-radius: 10px`, 줄마다 `hover: background: #f8f9ff`

### 5-8. 스크롤 등장 인터랙션

- 각 섹션(PI, Ph.D., M.S. 등)에 스크롤하면 카드들이 순차적으로 `fadeInUp` 등장
- 개별 카드마다 `animation-delay`를 다르게 해서 물결치듯 나타나는 효과
- 과하지 않게: `duration: 0.5s`, `delay` 간격 `0.08s~0.12s`
- Intersection Observer API 사용하거나, 가벼운 CSS 기반 `animation-timeline` 사용

### 5-9. 데이터 관리 구조

학생 정보를 쉽게 관리할 수 있도록, `_data/members.yml` 파일로 관리하는 구조를 추천합니다:

```yaml
pi:
  - name: Prof. Minjun Kim
    name_ko: 김민준
    role: Principal Investigator
    image: /assets/img/members/pi.jpg
    email: minjun@kaist.ac.kr
    scholar: https://scholar.google.com/...
    website: https://...
    bio: "Brief bio here..."

phd:
  - name: Soyeon Park
    name_ko: 박소연
    role: Ph.D. Candidate
    image: /assets/img/members/soyeon.jpg
    grad_school: KAIST School of Computing
    undergrad: KAIST 전기및전자공학부
    research_areas: [SLAM, Visual Navigation, LiDAR]
    email: soyeon@kaist.ac.kr
    scholar: https://...
    github: https://...

ms:
  - name: Minji Choi
    name_ko: 최민지
    role: M.S. Student
    image: /assets/img/members/minji.jpg
    grad_school: KAIST School of Computing
    undergrad: 서울대학교 컴퓨터공학부
    research_areas: [Multi-Robot Systems, Coverage Planning]

research_interns:
  - name: Donghyun Kang
    name_ko: 강동현
    role: Research Intern
    image: /assets/img/members/donghyun.jpg
    school: KAIST 전산학부 4학년
    research_areas: [3D Object Detection]

undergrad:
  - name: ...

alumni:
  - name: Dr. Jihoon Yoon
    degree: "Ph.D. 2024"
    current: "Postdoc @ MIT"
  - name: Eunji Han
    degree: "M.S. 2024"
    current: "Samsung Research"
```

이 YAML 데이터를 읽어서 Members 페이지에 자동으로 렌더링하는 Jekyll 레이아웃을 만들어주세요. 이렇게 하면 멤버 추가/수정 시 YAML 파일만 편집하면 됩니다.

---

## 6. Contact 페이지

현재 대체로 괜찮지만 미세 조정:
- 카드 `box-shadow` 강화: `0 4px 20px rgba(0,0,0,0.08)`
- 카드 내부 여백 좀 더: `padding: 2rem`
- 이메일 링크 색상: `#2d3a8c`, hover 시 밑줄
- "Prospective Students" 섹션에 좀 더 눈에 띄는 스타일 (좌측에 accent 바 또는 배경색 `#f8f9ff`)

---

## 7. 기술 구현 참고사항

### 스크롤 애니메이션 구현 (추천 방식)

SCSS에 추가:
```scss
.scroll-reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
  
  &.revealed {
    opacity: 1;
    transform: translateY(0);
  }
}
```

JS (assets/js/ 에 추가하거나 레이아웃에 inline):
```javascript
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // stagger delay
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.scroll-reveal').forEach((el, i) => {
    el.dataset.delay = i * 100; // 100ms stagger
    observer.observe(el);
  });
});
```

### 이미지 깨짐 방지

Publications의 preview 이미지가 없을 때:
```scss
.publication-preview {
  img {
    &[src=""], &:not([src]) {
      display: none;
    }
  }
}
```

### _config.yml 주의

- plugins 목록 절대 변경하지 말 것
- baseurl은 비워둘 것
- SCSS는 `@use` 모듈 시스템 사용 (`@import` 사용 금지)

---

## 수정 우선순위

1. **전역 인터랙션 & 버튼 퀄리티** (모든 페이지에 영향)
2. **Members 페이지 대폭 개편** (가장 큰 변화)
3. **Home Hero 섹션 디테일**
4. **Publications 디자인 다듬기**
5. **Research 페이지 디테일**
6. **Contact 미세 조정**
7. **Footer 스타일**

---

## 참고 파일

- `DESIGN_PROTOTYPE.jsx`: 원본 디자인 프로토타입 (색상, 레이아웃, 구조 참고)
- `CLAUDE_CODE_HANDOFF.md`: 프로젝트 전체 컨텍스트
- `_sass/_custom.scss`: 현재 커스텀 스타일 (여기에 추가/수정)
