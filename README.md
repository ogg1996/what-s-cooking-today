# 🍳 오늘 뭐 해먹지?
> **음식 레시피를 추천하거나 제공하는 웹 서비스**
> <br>이 프로젝트는 **먹방맵**을 밴치마킹하여 제작했습니다.
> <br>(현재는 사이트가 없어졌습니다.)

<br>

## 🔗 배포 링크
> https://whatscookingtoday.netlify.app

<br>

## 🛠 사용 기술
### 📌 프론트엔드
- React
  - 컴포넌트 기반 구조로 UI를 재사용 가능하게 구성하고,
    <br>유지보수를 용이하게 하기 위해 사용했습니다.
- React Router
  - SPA 환경에서 페이지 전환 시 새로고침 없는 라우팅 처리를 위해 사용했습니다.
### 🎨 스타일링
- Styled-Components
  - JSX 내부에서 스타일을 함께 관리하여 컴포넌트 단위로 스타일 스코프를 분리하고,
    <br>스타일 충돌을 방지해 유지보수를 용이하게 하기 위해 사용했습니다.
### 🔄 상태 관리
- Redux Toolkit
  - 전역 상태를 효율적으로 관리하기 위해 사용했습니다.
### 🌐 네트워킹
- Axios
  - 인스턴스를 활용해 API 요청을 간편하게 처리하기 위해 사용했습니다.
- React Query
  - 이전 데이터가 필요한 화면에서 캐시를 유지하여
    <br>사용자의 탐색 흐름이 자연스럽게 이어지도록 하기 위해 사용했습니다.
### 🏗 **Build & Development**
- Vite
  - 빠른 개발 환경 셋팅을 위해 사용했습니다.
- ESLint
  - 코드 품질을 유지하고 일관된 코드 스타일을 적용하기 위해
    <br>Airbnb 스타일 가이드를 적용해 사용했습니다.
- Prettier
  - 협업을 가정하여 코드 포맷을 자동으로 통일하기 위해 사용했습니다.

<br/>

## 📌 기능 소개

### 1️⃣ 반응형 디자인
> **Media Query를 활용해 PC/모바일 환경에 따라 레이아웃이 자동으로 최적화되도록 구현했습니다.**

#### 🎲 추천 페이지

|웹|모바일|
|---|---|
|![](https://github.com/ogg1996/readmeResource/blob/main/whats-cooking-today/%EC%9B%B9_%EC%B6%94%EC%B2%9C.PNG)|![](https://github.com/ogg1996/readmeResource/blob/main/whats-cooking-today/%EB%AA%A8%EB%B0%94%EC%9D%BC_%EC%B6%94%EC%B2%9C.PNG)|

<br>

#### 🗂️ 목록 페이지

|웹|모바일|
|---|---|
|![](https://github.com/ogg1996/readmeResource/blob/main/whats-cooking-today/%EC%9B%B9_%EB%AA%A9%EB%A1%9D.PNG)|![](https://github.com/ogg1996/readmeResource/blob/main/whats-cooking-today/%EB%AA%A8%EB%B0%94%EC%9D%BC_%EB%AA%A9%EB%A1%9D.PNG)|

<br>

#### 📖 상세 페이지

|웹|모바일|
|---|---|
|![](https://github.com/ogg1996/readmeResource/blob/main/whats-cooking-today/%EC%9B%B9_%EC%83%81%EC%84%B8.PNG)|![](https://github.com/ogg1996/readmeResource/blob/main/whats-cooking-today/%EB%AA%A8%EB%B0%94%EC%9D%BC_%EC%83%81%EC%84%B8.PNG)|

<br>

#### 🔎 검색결과 페이지

|웹|모바일|
|---|---|
|![](https://github.com/ogg1996/readmeResource/blob/main/whats-cooking-today/%EC%9B%B9_%EA%B2%80%EC%83%89.PNG)|![](https://github.com/ogg1996/readmeResource/blob/main/whats-cooking-today/%EB%AA%A8%EB%B0%94%EC%9D%BC_%EA%B2%80%EC%83%89.PNG)

<br>

### 2️⃣ UI/UX

#### 🔍 검색 창
> **Redux를 사용해 모달의 상태를 관리하고, 모바일에서는 돋보기 버튼 클릭 시 검색 창이 모달 형태로 표시되도록 구현했습니다.**

<table>
  <tr>
    <th><strong>웹</strong></th>
    <th><strong>모바일</strong></th>
  </tr>
  <tr>
    <td valign="top"><img src="https://github.com/ogg1996/readmeResource/blob/main/whats-cooking-today/%EC%9B%B9_%EA%B2%80%EC%83%89%EC%B0%BD.PNG"></td>
    <td valign="top"><img src="https://github.com/ogg1996/readmeResource/blob/main/whats-cooking-today/%EB%AA%A8%EB%B0%94%EC%9D%BC_%EA%B2%80%EC%83%89%EC%B0%BD.PNG"></td>
  </tr>
</table>

<br>

#### 📍 네비게이션 탭 하이라이트
> **Redux를 활용해 현재 페이지 상태를 관리하고, 해당 상태에 따라 하단 네비게이션 바에서 선택된 탭이 시각적으로 강조되도록 구현했습니다.**

![](https://github.com/ogg1996/readmeResource/blob/main/whats-cooking-today/2_NavIndicator.gif)

<br>

#### ✨ 호버 효과
> **CSS의 `:hover` 선택자를 활용해 버튼과 레시피 아이템에 마우스 오버 시 인터랙션 효과를 적용했습니다.**

<table>
    <tr>
        <th><strong>일반 버튼</strong></th>
        <th><strong>레시피 아이템</strong></th>
    </tr>
    <tr>
        <td rowspan="3"><img src="https://github.com/ogg1996/readmeResource/blob/main/whats-cooking-today/2_%ED%98%B8%EB%B2%84_%EB%B2%84%ED%8A%BC.gif"></td>
        <td valign="middle"><img src="https://github.com/ogg1996/readmeResource/blob/main/whats-cooking-today/2_%ED%98%B8%EB%B2%84_%EB%A0%88%EC%8B%9C%ED%94%BC.gif"></td>
    </tr>
    <tr style="height: 37px;">
        <th style="height: 37px;"><strong>탑 버튼</strong></th>
    </tr>
    <tr>
        <td valign="middle"><img src="https://github.com/ogg1996/readmeResource/blob/main/whats-cooking-today/2_%ED%98%B8%EB%B2%84_%ED%83%91%EB%B2%84%ED%8A%BC.gif"></td>
    </tr>
</table>

<br>

#### 🦴 스켈레톤 컴포넌트
> **텍스트와 이미지용 베이스 스켈레톤 컴포넌트를 제작하여 재사용성을 높였으며, 이를 기반으로 다양한 스켈레톤 UI를 구현했습니다.**

|목록|상세보기|
|---|---|
|![](https://github.com/ogg1996/readmeResource/blob/main/whats-cooking-today/2_%EC%8A%A4%EC%BC%88%EB%A0%88%ED%86%A4_%EB%AA%A9%EB%A1%9D.gif)|![](https://github.com/ogg1996/readmeResource/blob/main/whats-cooking-today/2_%EC%8A%A4%EC%BC%88%EB%A0%88%ED%86%A4_%EC%83%81%EC%84%B8.gif)|

<br>

#### ♾️ 인피니티 스크롤
> **IntersectionObserver를 활용해 제작한 커스텀 훅을 사용해 로딩 스피너가 뷰포트에 진입 시 다음 레시피를 자동으로 로드하도록 구현했습니다.**

![](https://github.com/ogg1996/readmeResource/blob/main/whats-cooking-today/4_InfiniteScroll.gif)

<br>

#### 🍽️ 간단한 추천 애니메이션 적용
> **CSS의 `@keyframes`와 `animation` 속성을 활용해 음식 추천 시 자연스러운 애니메이션을 적용했습니다.**

![](https://github.com/ogg1996/readmeResource/blob/main/whats-cooking-today/2_suggestAnim.gif)

<br>

#### 💾 페이지 상태 유지
> **React Query와 useNavigationType을 활용해, `PUSH` 시에는 캐시를 초기화하고 `POP` 시에는 상태를 유지하여 이전 화면을 복원하도록 구현했습니다.**

![](https://github.com/ogg1996/readmeResource/blob/main/whats-cooking-today/2_KeepUpPage.gif)

<br>

### 3️⃣ 검색 기능

#### 📝 검색기록 저장, 삭제 기능
> **Redux와 Redux-persist를 활용해 검색 기록을 로컬 스토리지에 저장하고, Reducer로 추가/삭제 및 자동 만료 기능을 구현했습니다.**

![](https://github.com/ogg1996/readmeResource/blob/main/whats-cooking-today/3_%EA%B2%80%EC%83%89_%ED%9E%88%EC%8A%A4%ED%86%A0%EB%A6%AC.gif)

<br>

#### 🔡 연관 검색어 자동 완성 및 일치하는 부분 하이라이트 기능
> **[korean-regexp](https://github.com/bluewings/korean-regexp) 라이브러리를 활용해 초성 검색이 가능한 정규표현식을 구성하고, match 및 split 함수를 이용해 일치하는 부분만 하이라이트 처리하였습니다.**

![](https://github.com/ogg1996/readmeResource/blob/main/whats-cooking-today/3_%EA%B2%80%EC%83%89_%EC%97%B0%EA%B4%80%EA%B2%80%EC%83%89.gif)

<br>

### 4️⃣ 성능 최적화

#### 🖼️ 이미지 레이지 로딩
> **IntersectionObserver를 활용해 제작한 커스텀 훅을 사용해 이미지가 뷰포트에 진입 시 로딩되도록 하여 초기 로딩 성능을 개선했습니다.**

![](https://github.com/ogg1996/readmeResource/blob/main/whats-cooking-today/4_ImageLazyLoading.gif)

<br>

#### 🔤 폰트 다이나믹 서브셋
> **[font-range](https://github.com/black7375/font-range) 라이브러리를 활용해 서브셋 폰트를 생성하고, 이를 분리하여 적용함으로써 폰트 로딩 속도를 개선했습니다.**

![](https://github.com/ogg1996/readmeResource/blob/main/whats-cooking-today/4_DynamicSubset.gif)

<br>

## 🚀 시작하기

### 1️⃣ 설치 방법
``` bash
git clone https://github.com/ogg1996/what-s-cooking-today.git
cd 저장 위치
npm install
```

### 2️⃣ 환경 변수 설정 (.env)
``` bash
VITE_API_URL=https://aluminum-halved-bactrosaurus.glitch.me # API URL
```

### 3️⃣ 실행 방법
``` bash
npm run dev
```

<br/>

## 📌 사이트 이용안내 
- 이 프로젝트의 서버는 Render 무료 플랜을 사용하여 배포되었습니다.
- 서버가 유휴 상태일 경우, 첫 요청 시 최대 1분 정도 걸릴 수 있습니다.
- 이후 요청은 빠르게 응답됩니다.

### [🔗 오늘 뭐 해먹지? 서버 Github](https://github.com/ogg1996/what-s-cooking-today-server)
