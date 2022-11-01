import { addCommas } from "../../useful-functions.js"
import { getTotalPrice } from "../util/util.js"
import { addEvents } from "./addEvents.js";

function addItems(datas) {

  return datas?.map(data => {

    const { imgUrl, title, author, price ,ISBN } = data;
    const newPrice = addCommas(price);

    return `<div class="itembox"> 
          <div class="imgbox">
            <button id="select_btn"></button>
            <img class="bookImg" src=${imgUrl} alt="book"></img>
          </div>
          <div class="infoBox">
            <span>${title}/ ${author}</span>
            <div class="add_btn_container">
              <button class="add_btn">🔺</button>
              <div class="add_btn_input">1</div>
              <button class="add_btn">🔻</button>
            </div>
          </div>
          <div class="priceBox">
            <button class="delete_btn" data-id=${ISBN}>❌</button>
            <div>금액</div>
            <div>${newPrice}</div>
          </div>
          </div>`
  }).join('');
}


export function renderData(datas =[]) {
  const itemContainer = document.querySelector(".item-container");
  const priceTag = document.querySelector(".priceTag");
  const dataString = addItems(datas);
  const totalPrice = addCommas(getTotalPrice(datas));
  priceTag.innerText = `총금액 : ${totalPrice}`
  itemContainer.innerHTML = dataString;

  addEvents();
}

