import { validateData } from "./validateData.js";

export async function registerForm(event) {

  event.preventDefault();
  const titleInput = document.querySelector("#title");
  const selectInput = document.querySelector("#category_select");
  const authorInput = document.querySelector("#author");
  const publishInput = document.querySelector("#publisher");
  const publishDateInput = document.querySelector("#publishDate");
  const EbookTrueInput = document.querySelector("#Ebooktrue");
  const descriptionInput = document.querySelector("#description");
  const fileInput = document.querySelector("#file");

  const InfoArray = [titleInput, selectInput, authorInput, publishInput, publishDateInput
    ,EbookTrueInput,descriptionInput,fileInput].map(input => input.value);

    console.log(InfoArray);

    console.log(EbookTrueInput.checked);
  
  
  if (!validateData(InfoArray)) return;

  const [title, select, author, publish,
    publishDate,description,file]= InfoArray;

  console.log("검증완료");

  // try {
  //   const data = { 
 
  //   }


  //   await Api.post("https://eladin-lgurfdxfjq-du.a.run.app/api/auth/register"
  //   , data);

  //   alert(`정상적으로 회원가입되었습니다.`);

  //   // // 로그인 페이지 이동
  //   window.location.href = "/src/views/login/login.html";
  // } catch (err) {
  //   console.error(err.stack);
  //   alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
  // }

}