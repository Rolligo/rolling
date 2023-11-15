# 프로젝트: 롤링

<div align="center">
  <img src="https://github.com/codeit-part2-team4/rolling/assets/117700203/e3a43fad-ea9e-4d5e-a555-e300e6ebe27a" />
</div>

## 📌 롤링 서비스 소개

### 📢 누구나 손쉽게 만들 수 있는 온라인 롤링 페이퍼 서비스
> - 로그인 없이 자유롭게 만드는 롤링 페이퍼
> - 롤링 페이퍼에 원하는 스타일로 메세지를 남길 수 있어요
> - 서로에게 이모지로 감정을 표현할 수 있어요

### 🖥️ 미리보기

#### [메인 페이지](https://github.com/codeit-part2-team4/rolling/wiki/MainPage)

![image](https://github.com/codeit-part2-team4/rolling/assets/117700203/df81f317-13a6-4f44-a6af-1aae4e90db8b)

#### [롤링 페이퍼 목록 페이지](https://github.com/codeit-part2-team4/rolling/wiki/PaperListPage)

![image](https://github.com/codeit-part2-team4/rolling/assets/117700203/666ff9de-a01c-4dfc-9581-0ad190b768fd)

#### [롤링 페이퍼 생성 페이지](https://github.com/codeit-part2-team4/rolling/wiki/CreatePaperPage)

![image](https://github.com/codeit-part2-team4/rolling/assets/117700203/53dddb42-2637-4076-82a7-fdad89e2b106)

#### [롤링 페이퍼 페이지](https://github.com/codeit-part2-team4/rolling/wiki/MessageListPage)

![image](https://github.com/codeit-part2-team4/rolling/assets/117700203/534de620-12c3-446c-9d82-64bdc6cae553)

#### [메세지 생성 페이지](https://github.com/codeit-part2-team4/rolling/wiki/CreateMessagePage)

![image](https://github.com/codeit-part2-team4/rolling/assets/117700203/5173eede-79a9-48b3-b6c9-5ab53fc201e7)

## 📝 프로젝트 소개

### 📍 배포 링크

https://codeit-part2-team4.github.io/rolling/

### 📆 개발 기간

2023.11.3 ~ 2023.11.17

### 🛠️ 사용 기술

#### Core Technologies

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Styled-components](https://img.shields.io/badge/Styled--components-6.1.0-DB7093?logo=styled-components&logoColor=white)](https://styled-components.com/)

#### Supporting Libraries

[![ESLint](https://img.shields.io/badge/ESLint-8.52.0-4B3263?logo=eslint&logoColor=white)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-3.0.3-F7B93E?logo=prettier&logoColor=white)](https://prettier.io/)
[![Axios](https://img.shields.io/badge/Axios-0.24.0-61DAFB?logo=axios&logoColor=white)](https://www.npmjs.com/package/axios)
[![React-Router-Dom](https://img.shields.io/badge/React--Router--Dom-6.18.0-CA4245?logo=react-router&logoColor=white)](https://www.npmjs.com/package/react-router-dom)

[![React-Helmet](https://img.shields.io/badge/React--Helmet-6.1.0-848484?logo=react-helmet&logoColor=white)](https://www.npmjs.com/package/react-helmet)
[![React-Quill](https://img.shields.io/badge/React--Quill-2.0.0-1A1A1A?logo=quill&logoColor=white)](https://www.npmjs.com/package/react-quill)
[![dompurify](https://img.shields.io/badge/dompurify-3.0.6-68A063)](https://www.npmjs.com/package/dompurify)
[![emoji-picker-react](https://img.shields.io/badge/emoji--picker--react-4.5.15-FFD43B)](https://www.npmjs.com/package/emoji-picker-react)

### ⚙️ 개발 방법론

- 상향식(bottom-up)으로, 컴포넌트를 먼저 구현하고 이후에 페이지에서 컴포넌트를 조립하는 방식을 사용
- 반응형 웹 디자인은 모바일 사이즈를 기준으로 먼저 개발하고, 이후에 태블릿과 PC 사이즈를 고려하는 방식을 사용
- 하루에 한 번, 정해진 시간에 [데일리 스크럼](https://helloworld.kurly.com/blog/daily-scrum-thinking/)을 진행
- 프로젝트 관리 도구로는 팀 Notion을 사용, 전체적인 진행 상황을 항상 공유할 수 있도록 최신화
- [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/) 전략을 참고해서 프로젝트 규모에 맞추어 브랜치 전략을 설정
  - `develop` 브랜치를 중심으로 새로운 브랜치를 만들어서 작업 후, Pull Request 과정을 거쳐 `develop`에 `merge`하는 방식으로 진행
  - 이때 브랜치 이름은 작업 내용에 따라 `feature/{작업 내용}`, `refactor/{작업 내용}`과 같이 설정하고, 컴포넌트 위주의 작업이라면 브랜치에서도 실제 컴포넌트 이름과 통일성을 부여하기 위해 PascalCase를 사용
- 버그나 에러를 발견하면 GitHub에 Issue를 등록하고 새로운 브랜치를 만들어서 해결

### ✏️ 코딩 컨벤션

- 프로젝트 내의 `.eslintrc`와 `.prettierrc` 파일을 통해 모든 구성원이 코딩 컨벤션을 통일할 수 있도록 설정
- ESLint와 Prettier의 기본 설정을 사용하되, 프로젝트를 진행하면서 필요한 규칙이 있다면 커스텀해서 사용
- 프로젝트 내에서 가독성을 고려해서 절대 경로와 상대 경로를 혼용해서 사용할 수 있도록 별도 설정
- 디자인에서 공통적으로 사용되는 폰트, 색상, 미디어 쿼리 등의 스타일링 코드는 미리 작성하고 사용함으로써 가독성과 효율성 확보
- 리액트 컴포넌트 작성 시에는 아래와 같은 규칙을 따르도록 통일
  - 리액트 컴포넌트는 하나의 폴더에 `.jsx` 확장자를 사용해서 작성, 파일명은 컴포넌트의 이름을 따르도록 함
  - 스타일링 코드는 일괄적으로 styled-components를 사용해서 같은 폴더에 별도의 파일로 작성, 파일명은 스타일링 대상에 `.style.js`를 붙이도록 함
  - 스타일드 컴포넌트를 사용할 때는 와일드카드 문자를 통해 `S` 객체로 `import`해서 사용
  - 컴포넌트가 다른 코드에서 사용될 때의 가독성 향상을 위해 별도의 `index.js` 파일을 만들어 `export`문을 작성
- 프로젝트 내에서 API를 사용하는 코드는 모두 커스텀 훅 `useRequest`를 사용해 코드의 가독성을 향상

## 👥 팀원 소개

| 팀원 | 팀원 | 팀원 | 팀장 | 팀원 |
|:---:|:---:|:---:|:---:|:---:|
|[<img src="https://github.com/arky02.png" width="100" height="100">](https://github.com/arky02)<br>김기연|[<img src="https://github.com/summerkimm.png" width="100" height="100">](https://github.com/summerkimm)<br>김소은|[<img src="https://github.com/K-Y-Hoo.png" width="100" height="100">](https://github.com/K-Y-Hoo)<br>김윤후|[<img src="https://github.com/asusia1111.png" width="100" height="100">](https://github.com/asusia1111)<br>안성재|[<img src="https://github.com/gw-lim.png" width="100" height="100">](https://github.com/gw-lim)<br>임건우|
