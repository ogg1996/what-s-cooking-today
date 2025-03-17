# 🍳 오늘 뭐 해먹지?
> **음식 레시피를 추천하거나 제공하는 사이트**

## 🛠 사용 기술
### 📌 **Frontend**
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-%232764D3?logo=redux&logoColor=white)
![React Query](https://img.shields.io/badge/React%20Query-%23FF4154?logo=reactquery&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-%23CA4245?logo=reactrouter&logoColor=white)
![Styled-components](https://img.shields.io/badge/Styled--Components-%23DB7093?logo=styled-components&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-%23007EC6?logo=axios&logoColor=white)

### 🏗 **Build & Development**
![Vite](https://img.shields.io/badge/Vite-%23646CFF?logo=vite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-%234B32C3?logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-%23F7B93E?logo=prettier&logoColor=white)

## 📊 레퍼런스
이 프로젝트는 [**먹방맵**](https://www.mukbangmap.com/menuFinder)을 밴치마킹하여 제작했습니다.

## 📌 기능 소개 및 기술적 접근
### 1️⃣ 반응형 디자인
> 미디어 쿼리를 활용하여 화면 크기에 따라 자동으로 조정되는 반응형 디자인을 구현하였습니다.

**추천 페이지**
|웹|모바일|
|---|---|
|![](https://github.com/ogg1996/readmeResource/blob/main/whats-cooking-today/%EC%9B%B9_%EC%B6%94%EC%B2%9C.PNG)|![](https://github.com/ogg1996/readmeResource/blob/main/whats-cooking-today/%EB%AA%A8%EB%B0%94%EC%9D%BC_%EC%B6%94%EC%B2%9C.PNG)|

<br>

**목록 페이지**
|웹|모바일|
|---|---|
|![](https://github.com/ogg1996/readmeResource/blob/main/whats-cooking-today/%EC%9B%B9_%EB%AA%A9%EB%A1%9D.PNG)|![](https://github.com/ogg1996/readmeResource/blob/main/whats-cooking-today/%EB%AA%A8%EB%B0%94%EC%9D%BC_%EB%AA%A9%EB%A1%9D.PNG)|

<br>

**상세 페이지**
|웹|모바일|
|---|---|
|![](https://github.com/ogg1996/readmeResource/blob/main/whats-cooking-today/%EC%9B%B9_%EC%83%81%EC%84%B8.PNG)|![](https://github.com/ogg1996/readmeResource/blob/main/whats-cooking-today/%EB%AA%A8%EB%B0%94%EC%9D%BC_%EC%83%81%EC%84%B8.PNG)|

<br>

**검색 페이지**
|웹|모바일|
|---|---|
|![](https://github.com/ogg1996/readmeResource/blob/main/whats-cooking-today/%EC%9B%B9_%EA%B2%80%EC%83%89.PNG)|![](https://github.com/ogg1996/readmeResource/blob/main/whats-cooking-today/%EB%AA%A8%EB%B0%94%EC%9D%BC_%EA%B2%80%EC%83%89.PNG)

<br>

**검색 창**
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

### 2️⃣ UI/UX 개선
> 호버 효과

**버튼과 레시피 아이템에 호버 효과를 적용하여 UI를 개선하였습니다.**

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

> 스켈레톤 컴포넌트 (로딩 중 사용자 경험 개선)

> 간단한 추천 애니메이션 적용(로딩 중 사용자 경험 개선)

> 선택한 메뉴 하이라이트 효과

### 3️⃣ 검색 기능
> 검색 히스토리 (사용자가 검색한 기록 저장 및 활용)

> 연관 검색어 자동 완성 (API 데이터 기반)

> 연관 검색어 하이라이트 (검색어 일치 부분 강조)

### 4️⃣ 성능 최적화
> 인피니티 스크롤 (스크롤 기반 동적 데이터 로딩)

> 폰트 다이나믹 서브셋 (필요한 글자만 로드하여 최적화)

> 이미지 레이지 로딩 (Intersection Observer 활용)

## 🚀 시작하기

### 1️⃣ 설치 방법
``` bash
git clone https://github.com/ogg1996/what-s-cooking-today.git
cd 저장 위치
npm install
```

### 2️⃣ 환경 변수 설정 (.env)
``` bash
VITE_API_URL=https://aluminum-halved-bactrosaurus.glitch.me
```

### 3️⃣ 실행 방법
``` bash
npm run dev
```

