<div align="middle"> <h1>Eladin 도서 판매 서비스</h1> </div>
<div align="middle"> <img alt="엘라딘 로고" src="https://eladin-lgurfdxfjq-du.a.run.app/category-booklist/image/Eladin_CI.png"> </div><br>

## 1. 서비스 개요

### 1-1. Topic

도서 구매 웹사이트

### 1-2. Service Name

Eladin(엘라딘)

### 1-3. Goal

기존 알라딘 사이트의 UX/UI 개선

### 1-4. Objective

기존 알라딘 사이트의 양탄자 배송에서 착안하여 사용자의 빠른 주문 및 배송이 가능하도록 단순화된 UI와 최소한의 기능 제공

### 1-5. Target User

복잡한 절차 없이 도서를 빨리 구매하고 싶은 사람

<br />

## 2. 팀원 소개

| 이름   | 담당 업무       |
| ------ | --------------- |
| 윤동주 | 팀장/프론트엔드 |
| 김유정 | 팀원/프론트엔드 |
| 김혜민 | 팀원/백엔드     |
| 서윤지 | 팀원/백엔드     |
| 이수빈 | 팀원/프론트엔드 |

<br />

## 3. 서비스 설명

<br />

### 3-1. 서비스 도메인

### https://eladin-lgurfdxfjq-du.a.run.app/

<br />
![image](https://storage.googleapis.com/eladin_img/appqrcode.png)

<br />

### 3-2. 테스트 계정

| Role  | ID                | PW       |
| ----- | ----------------- | -------- |
| Admin | cozyma@elice.com  | 12345678 |
| User  | python3@naver.com | python3! |

<br />

### 3-3. API 문서

### https://documenter.getpostman.com/view/18622149/2s8YRqjqCg

<br />

### 3-4. 서비스 주요 기능

#### 제품 등록, 장바구니 추가, 주문하기 등 쇼핑몰의 핵심 서비스 구현

1. 회원가입, 로그인, 회원정보 수정, 회원탈퇴 등 유저 정보 관련 **CRUD** 가능
2. JWT 토큰: 서버 DB가 아닌 프론트 단 **sessionStorage**에서 저장 및 관리
3. 카테고리에 따른 도서 목록, 도서 상세 정보 **조회** 가능
4. 장바구니 도서 조회, 도서 추가, 일부/전체 선택, 일부/전체 삭제 등 장바구니에서 **CRUD** 가능
5. 장바구니: 서버 DB가 아닌 프론트 단 **localStorage**에서 저장 및 관리
6. 장바구니에서 주문 목록 조회, 주문 완료 후 주문 정보 **조회 및 삭제** 가능
7. 관리자: 주문, 카테고리, 도서 **CRUD** 가능

<br>

### 3-4. 데모 영상

<details><summary>사용자 회원가입, 로그인</summary>

![image](https://user-images.githubusercontent.com/91174156/172159634-1e105633-9948-464e-a540-5429200a1353.gif)

</details>

<details><summary>카테고리 추가 및 반영</summary>

추후 관련 영상을 삽입하세요 (하기 2가지 방법 가능)

1. 화면녹화 -> 유튜브 업로드 -> 유튜브 링크 삽입
2. 화면움짤녹화 -> 움짤삽입 (https://www.screentogif.com/ 활용가능)

</details>

<details><summary>제품 추가 및 반영</summary>

추후 관련 영상을 삽입하세요 (하기 2가지 방법 가능)

1. 화면녹화 -> 유튜브 업로드 -> 유튜브 링크 삽입
2. 화면움짤녹화 -> 움짤삽입 (https://www.screentogif.com/ 활용가능)

</details>

<details><summary>장바구니 기능</summary>

추후 관련 영상을 삽입하세요 (하기 2가지 방법 가능)

1. 화면녹화 -> 유튜브 업로드 -> 유튜브 링크 삽입
2. 화면움짤녹화 -> 움짤삽입 (https://www.screentogif.com/ 활용가능)

</details>

<details><summary>주문 기능</summary>

추후 관련 영상을 삽입하세요 (하기 2가지 방법 가능)

1. 화면녹화 -> 유튜브 업로드 -> 유튜브 링크 삽입
2. 화면움짤녹화 -> 움짤삽입 (https://www.screentogif.com/ 활용가능)

</details>

<details><summary>관리자 페이지</summary>

추후 관련 영상을 삽입하세요 (하기 2가지 방법 가능)

1. 화면녹화 -> 유튜브 업로드 -> 유튜브 링크 삽입
2. 화면움짤녹화 -> 움짤삽입 (https://www.screentogif.com/ 활용가능)

</details>

<br />

### 3-5. 페이지 별 화면

|                                              |                                              |
| -------------------------------------------- | -------------------------------------------- |
| ![image](https://i.ibb.co/jyxjcd3/image.png) | ![image](https://i.ibb.co/Q860RKz/image.png) |
| 메인 페이지                                  | 회원가입 화면                                |
| ![image](https://i.ibb.co/RpYN379/image.png) |                                              |
| 로그인 페이지                                | 앞으로 추가할 페이지                         |

<br />

## 4. 기술 스택

<!-- ![image](https://i.ibb.co/N34mXzy/image.png) -->

## # Language

|                                                                                                                   Javascript                                                                                                                    |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://w.namu.la/s/18f590719ba62222718f1a68efcad20118c422b146650c97162d782ef9995d28326d1011cfb37595d9c60d66a05b343556e520204383d4429456fb54ca6bbf5af4478dcda8d69b01f1ff11d5ff591da7589496b4d6b76b740c744af82c8786c9" width="100px"/> |

## # FE

|                               Bulma                               |                                     LocalStorage                                     |                                                                                                                 SessionStorage                                                                                                                  |
| :---------------------------------------------------------------: | :----------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://bulma.io/images/bulma-logo.png" width="100px"/> | <img src="https://gyumin-kim.github.io/assets/img/local-storage.jpg" width="100px"/> | <img src="https://w.namu.la/s/6f8695350c52d8a6f07a30787fdd07ed65e77e010c16732832924d0effa75207dccdd972b8c7f5b9e7077c006e48cadde42f66172c11432a3c92e4407b4fcfdcc040e36fb74b8ec45f9aa61f910ba06893a395fc4ff48acf6711ccfdae2761c3" width="100px"/> |

## # BE

|                                                                                        Nodejs                                                                                        |                                                           Express                                                            |                                                 GCP                                                 |                                                                       MongoDB Atlas                                                                       |                                       Mongoose                                        |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: |
| <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fd9ZeBr%2FbtrH5eJpnMq%2FPK52szk1xNqGtGHp7RJoi1%2Fimg.png" width="100px"/> | <img src="https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234-p-500.png" width="100px"/> | <img src="https://www.logo.wine/a/logo/Google_Storage/Google_Storage-Logo.wine.svg" width="100px"/> | <img src="https://www.strongdm.com/hubfs/21126185/Technology%20Images/603c5eb831820c3ce6a8f057_603a1586fa052d17fc2a6929_MongoDBAtlas.png" width="100px"/> | <img src="https://avatars.githubusercontent.com/u/7552965?s=200&v=4g" width="100px"/> |

<br />

## 5. 인프라 구조

![image](https://i.ibb.co/9tGxmx0/image.png)<br />

### 5-1. 폴더 구조

- 프론트: `src/views` 폴더
- 백: src/views 이외 폴더 전체
- 실행: **프론트, 백 동시에, express로 실행**

<br />

<br />

## 6. 실행 방법

1. 레포지토리를 클론하고자 하는 디렉토리에서 아래 명령어를 수행

```bash
git clone https://kdt-gitlab.elice.io/sw_track/class_03/web_project/team4/eladin.git
```

2. 클론한 디렉토리에서 backend 디렉토리로 들어가 아래 명령어를 통해 backend에서 필요한 module 설치

```bash
npm install
```

3. backend에서 필요한 `.env` 설정

```bash
MONGODB_URL=mongodb+srv://ming:dpffltm123@cluster0.soadvsp.mongodb.net/?retryWrites=true&w=majority
PORT=8000

JWT_SECERT_KEY=<랜덤 문자열> /// ????
```

4. express 앱을 실행

```bash
"node index.js"
```

또는

```bash
"nodemon index.js --exec babel-node"
```

<br>

## 7. 버전

### 1.0.0

<br>

## 8. FAQ

<!-- <details><summary>1. 배포된 페이지는 어디에서 확인할 수 있나요?</summary>

  <p>
    프로젝트 기본 코드는 따로 배포하지 않았습니다, 레포지토리를 클론하여 직접 실행해보세요.
  </p>

</details>
<details><summary>2. env 파일이 보이지 않습니다.</summary>

  <p>
    해당 파일은 직접 만들어서 코드를 작성해야 합니다, DB를 비롯한 서비스의 계정 정보는 <b>절대로</b> Git에 함부로 공유하면 안되기 때문에 유의 바랍니다.
  </p> -->

</details>

---

본 프로젝트에서 제공하는 모든 코드 등의는 저작권법에 의해 보호받는 ㈜엘리스의 자산이며, 무단 사용 및 도용, 복제 및 배포를 금합니다.
Copyright 2022 엘리스 Inc. All rights reserved.
