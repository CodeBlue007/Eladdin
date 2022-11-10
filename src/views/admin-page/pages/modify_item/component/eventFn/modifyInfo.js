import { sendData } from "./sendData.js";
import { validateData } from "./validateData.js";


export function modifyInfo(event) {

  event.preventDefault();
  const titleInput = document.querySelector("#title");
  const selectInput = document.querySelector("#category_select");
  const authorInput = document.querySelector("#author");
  const publishInput = document.querySelector("#publisher");
  const publishDateInput = document.querySelector("#publishDate");
  const priceInput = document.querySelector("#price")
  const EbookTrueInput = document.querySelector("#Ebooktrue");
  const descriptionInput = document.querySelector("#description");

  const InfoArray = [titleInput, selectInput, authorInput, publishInput, publishDateInput
    ,priceInput, EbookTrueInput, descriptionInput].map(input => input.value);

  if (!validateData(InfoArray)) return;

  console.log("검증완료");
  sendData(InfoArray);
}