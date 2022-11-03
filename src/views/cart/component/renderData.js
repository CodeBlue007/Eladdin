import { addCommas } from "../../useful-functions.js"
import { getTotalPrice } from "../util/util.js"
import { addEvents } from "./addEvents.js";

function addItems(datas) {

  return datas?.map(data => {

    const { imgUrl, title, author, price, ISBN } = data;
    const newPrice = addCommas(price);

    return `<div class="itembox"> 
          <div class="imgbox">
            <button class="select_btn checked" data-id=${ISBN}></button>
            <img class="bookImg" src=${imgUrl} alt="book"></img>
          </div>
          <div class="infoBox">
            <span>${title}/ ${author}</span>
            <div class="add_btn_container">
              <button class="plus_btn" data-id=${ISBN}>🔺</button>
              <input class="add_btn_input" type="text" disabled value="1"/>
              <button class="minus_btn" data-id=${ISBN}>🔻</button>
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

export function setTotalPrice(datas) {
  const priceTag = document.querySelector(".priceTag");
  const totalPrice = addCommas(getTotalPrice(datas));
  priceTag.innerText = `총금액 : ${totalPrice}`
}


export function renderData(datas = []) {
  const itemContainer = document.querySelector(".item-container");
  const dataString = addItems(datas);
  setTotalPrice(datas);
  itemContainer.innerHTML = dataString;
  addEvents();
}

