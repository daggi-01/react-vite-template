# React + Vite
---
## 커스텀 템플릿 만들기

1. degit명령어로 스캣폴딩 하기
  - 그 안의 json, config.js등 파일 초기화 하기
  - 학습환경 재구성 페이지를 보며 패키지 부터 설치하기
    **vite 패키지 설치의 참고 자료를 보며 pnpm add -D vite 룰 했더니 오토 스케 폴딩이 되어 그 파일을 커스텀 해보기로 하였습니다.**

2. 수업 시간에 한 파일들을 보며 커스텀 하기
  - react와 react-dom 등 필요한 패키지를 깔고 html과 css수정, main.js의 파일 위치 수정 등을 하였습니다.
  - eslint의 최신버전은 react18v과 호환되게 eslint.config.js 수정하기

3. jsconfig.json애 절대경로 설정 넣기
  - main.js에 import App from "@/App.jsx"; import "@/index.css"; 로 수정한 후 페이지 열어보기

4. 최종 push 하기 전 .gitignore, 필요없는 파일 등 체크 하기

---
## 과재를 하면서 느낀점
 
 처음은 복잡해 보이고 어려워 보였는데 차근차근 학습환경 재구성 페이지를 따라하고, 전에 학습한 파일들을 보면서 하니깐 생각보다 수월하고 재미있다는 것을 느꼈습니다.
 