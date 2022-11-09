import * as Api from "../../../../../api.js";

export async function sendData(InfoArray) {

  const formData = new FormData();

  console.log(InfoArray);
  makeFormData(formData, InfoArray);
  console.log(formData);

  try {
    await Api.formPost("https://eladin-lgurfdxfjq-du.a.run.app/api/books",formData);

    alert(`상품추가를 완료했습니다.`);

    window.location.href = "../../admin-page.html";
  } catch (err) {
    console.error(err.stack);
    alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
  }
}

function makeFormData(formData, InfoArray){

  const makeISBN = () => Number(Math.random().toString().substring(2,15));

  const [title, select, author, publisher,
    publicationDate, price, Ebook, description, filename] = InfoArray;   

  const fileInput = document.querySelector("#file");
  const EbookTrueInput = document.querySelector("#Ebooktrue");

  formData.append("file", fileInput.files[0],filename);
  formData.append("title", title);
  formData.append("ISBN", makeISBN());
  formData.append("EBook", EbookTrueInput.checked);
  formData.append("author", author);
  formData.append("publisher", publisher);
  formData.append("description", description);
  formData.append("price", price);
  formData.append("publicationDate", publicationDate);
  formData.append("category", select);
}