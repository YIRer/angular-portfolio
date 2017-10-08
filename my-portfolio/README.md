포트폴리오 사이트 제작 프로젝트
===============================
Angular2를 이용한 개인포트폴리오 사이트
---------------------------------

## 1.제작이유

개인 포트폴리오 사이트를 닷홈을 통해서 배포중이 었는데, 무료호스팅 기간이 만료되어 새로운 호스팅을 구해야 했고, 최근 관심을 가지고 공부한 Angular2를 이용하여 SPA를 만들어보고 싶은 욕구가 생겨서 작업을 하게 되었다.

## 2. 제작기간 및 관련 정보

<pre>
총 제작 기간 : 14일(2017.06.12 ~ 2017.06.25)
제작인원 : 1명(본인)
작업도구 : Angular2, Javascript, Node.js, JQuery, Bootstrap, Git, Firebase
</pre>

[호스팅 링크] (https://portfolio-project-768d9.firebaseapp.com)

## 3.제작과정

전체 개발 과정은 아래와 같이 진행되었고, 여러가지 시도를 하면서 Firebase를 이용하여 배포하는 것으로 결정 되었다.

1. 사이트에 필요한 컨텐츠 정리(계획서.html), 이전에 사용되었던 컨텐츠 중에 쓸모 있는 부분은 재활용(카페베네 카피사이트)
2. 계획서를 작성하여 RESTful하게 URI를 구성하도록 계획
3. Firebase를 이용한 간단한 데이터베이스 사용 및 호스팅

### 로컬에서의 실행

1. node.js환경에서 포트폴리오 폴더(my-portfolio)로 이동한다
2. npm install을 입력하여 노드 모듈 설치
3. 설치 후 ng server로 로컬에서 실행

### 컴포넌트 구조

* app.component
* app.module
* app-routing.module
    + header
        - header.component
    + footer
        - footer.component
    + main    
        - main.component
            - contact.component
            - profile.component
                - show-profile.component
            - start.component
    + portfolio
        - portfolio.component
            - photo.component
                - photoComponent.component
                - photoItem.component
                - new.component
                - detail.component
    + shared
        - data.service
        - dropdown-directive.directive
        - shared.module
        - shorten.pipe

### 컴포너트의 구성

<pre>
app.component : 기본이 되는 컴포넌트. firebase에서 실행
app-routing.module : 페이지 접근시 보여줄 컴포넌트 및 자식 라우트 설정
<hr>
header.component : 네비게이션등이 포함된 컴포넌트
footer.component : 화면 하단을 차지하는 컴포넌트
<hr>
<b>main</b> : 메인, 프로필, 자기소개와 관련된 컴포넌트들로 구성

main.component : 처음 접근시 샐행되는 컴포넌트
start.component : main에서 들어가기 버튼을 누르면 나타나는 페이지
profile.component : show-profile 컴포넌트 실행
show-profile.component : 동적으로 구현된 자기소개 페이지
contact.component : 연락처 페이지
shared : 공통으로 사용되는 서비스등을 모아둔 곳
data.service : 파이어베이스를 이용한 데이터 처리와 관련된 서비스
dropdown-directive.directive : 드롭다운 기능을 위한 지시자
shared.module : 드롭다운 기능을 사용하기 위한 모듈 설정
shorten.pipe : 글씨를 줄여주는 필터 설정을 위한 pipe
<hr>
<b>portfolio</b> : 포트폴리오 관련 컴포넌트 들을 모아둔 곳
portfolio.module :  포트폴리오에 관련된 모듈들을 정리
portfolio-routing.module : 포트폴리오 라우팅 처리
portfolio.component : 포트폴리오의 기본 컴포넌트
<hr>
<b>photo</b> : 이미지 갤러리
photo.component : 이미지 갤러리 기본 컴포넌트
photo-routing.module : 이미지 갤러리 라우팅 구현
photo.module : 이미지 업데이트 데이터 형태 설정
photoItem.component : 갤러리 리스트 관련 컴포넌트
photoComponent.component : 갤러리 게시글 내부 컨텐츠와 덧글에 관련된 컴포넌트
new.component : 새로운 이미지 게시 및 수정과 관련된 컴포넌트
detail.component : 게시글 내부 컨텐츠와 덧글에 관련된 컴포넌트
</pre>

## 4.제작시 어려웠던점

제작하면서 가장 힘들었던 부분은 Angular2를 이용한 것이 가장 힘들었는데, SPA를 구현하기 위해 기존의 view 부분에서 사용했던 HTML,CSS,Javscript에 관한 지식뿐만 아니라 템플릿에 대한 이해와, Angular2에서 구현한 컴포넌트 중심의 프로그램 구성에 대한 이해가 제대로 되어야 했다는 점이다.

기존의 홈페이지 제작과는 다른 컴포넌트 중심의 애플리케이션 구현과 그와 관련된 이벤트의 처리, 프론트단에서 처리해야하는 애니메이션등 처음 작업하면서 구현하기 어려운 부분이 많았고, Javascript와 비슷하지만 다른 Typescript도 걸림돌이 되기도 했다.

## 5.제작시 배웠던 점

Angular2의 이벤트 처리에 관해서 좀 더 자세하게 알게 되었고, 완벽하지 않지만, 데이터의 처리나 애니메이션을 구현하는 방법을 알게 되었다. 또 기존 Javascript 라이브러리를 Typescript 내에서 사용하는 방법을 알게 되었다. 파이어베이스를 이용한 데이터베이스 및 호스팅 경험은 다른 프로젝트에서도 사용을 고려해 볼 정도로 좋은 서비스임을 알게 되었다.