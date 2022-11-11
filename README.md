<h1 align="middle">장바구니 애플리케이션</h1>

<div align="middle">
<img alt="쇼핑-데모 로고" src="https://i.ibb.co/xSZHxmy/image.png">
</div>


<br />

## 1. 서비스 소개

#### 제품 등록, 장바구니 추가, 주문하기 등 쇼핑몰의 핵심 서비스를 구현합니다. 
1. 회원가입, 로그인, 회원정보 수정 등 **유저 정보 관련 CRUD** 
2. **제품 목록**을 조회 및, **제품 상세 정보**를 조회 가능함. 
3. 장바구니에 제품을 추가할 수 있으며, **장바구니에서 CRUD** 작업이 가능함.
4. 장바구니는 서버 DB가 아닌, 프론트 단에서 저장 및 관리됨 (localStorage, indexedDB 등)
5. 장바구니에서 주문을 진행하며, **주문 완료 후 조회 및 삭제**가 가능함.
6. 추가 기능 ...

<br />

## 4. 제작자

| 이름 | 담당 업무 |
| ------ | ------ |
| 윤동주 | 팀장/프론트엔드 |
| 이수빈 | 팀원/프론트엔드 |
| 김유정 | 팀원/프론트엔드 |
| 서윤지 | 팀원/백엔드 |
| 김혜민 | 팀원/백엔드 |


### 1-1. API 문서

### https://documenter.getpostman.com/view/18622149/2s8YRqjqCg

<br>

### 1-2. 데모 영상

<details><summary>사용자 회원가입, 로그인</summary> - gif 추가필요

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

### 1-3. 페이지 별 화면

|  |  |
| ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------|
| ![image](https://i.ibb.co/jyxjcd3/image.png) | ![image](https://i.ibb.co/Q860RKz/image.png) |
|    메인 페이지                                |      회원가입 화면                            |
| ![image](https://i.ibb.co/RpYN379/image.png) |                                         |
|    로그인 페이지                              |     앞으로 추가할 페이지                         |

<br />


## 2. 기술 스택

<!-- ![image](https://i.ibb.co/N34mXzy/image.png) -->
## # Language
| Javascript |
| :--------: |
|  <img src="https://w.namu.la/s/18f590719ba62222718f1a68efcad20118c422b146650c97162d782ef9995d28326d1011cfb37595d9c60d66a05b343556e520204383d4429456fb54ca6bbf5af4478dcda8d69b01f1ff11d5ff591da7589496b4d6b76b740c744af82c8786c9" width="100px"/> |

## # FE
| Bulma | LocalStorage |  SessionStorage |
| :--------: | :--------: | :------: |
|  <img src="https://bulma.io/images/bulma-logo.png" width="100px"/> | <img src="https://w.namu.la/s/18f590719ba62222718f1a68efcad20118c422b146650c97162d782ef9995d28326d1011cfb37595d9c60d66a05b343556e520204383d4429456fb54ca6bbf5af4478dcda8d69b01f1ff11d5ff591da7589496b4d6b76b740c744af82c8786c9" width="100px"/> | <img src="https://w.namu.la/s/18f590719ba62222718f1a68efcad20118c422b146650c97162d782ef9995d28326d1011cfb37595d9c60d66a05b343556e520204383d4429456fb54ca6bbf5af4478dcda8d69b01f1ff11d5ff591da7589496b4d6b76b740c744af82c8786c9" width="100px"/> |

## # BE
| Nodejs | LocalStorage |  SessionStorage |
| :--------: | :--------: | :------: |
|  <img src="https://nodejs.org/static/images/logo.svg" width="100px"/> | <img src="https://w.namu.la/s/18f590719ba62222718f1a68efcad20118c422b146650c97162d782ef9995d28326d1011cfb37595d9c60d66a05b343556e520204383d4429456fb54ca6bbf5af4478dcda8d69b01f1ff11d5ff591da7589496b4d6b76b740c744af82c8786c9" width="100px"/> | <img src="https://w.namu.la/s/18f590719ba62222718f1a68efcad20118c422b146650c97162d782ef9995d28326d1011cfb37595d9c60d66a05b343556e520204383d4429456fb54ca6bbf5af4478dcda8d69b01f1ff11d5ff591da7589496b4d6b76b740c744af82c8786c9" width="100px"/> |
<br />

### 2-1. 프론트엔드

- **Vanilla javascript**, html, css (**Bulma css**)
- Font-awesome 
- Daum 도로명 주소 api 
- 이외

### 2-2. 백엔드 

- **Express**
- Mongodb, Mongoose



## 3. 인프라 구조

![image](https://i.ibb.co/9tGxmx0/image.png)<br />

### 3-1. 폴더 구조
- 프론트: `src/views` 폴더 
- 백: src/views 이외 폴더 전체
- 실행: **프론트, 백 동시에, express로 실행**

<br />


<br />

## 5. 실행 방법

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

## 6. 버전
### 1.0.0

<br>

## 7. FAQ
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