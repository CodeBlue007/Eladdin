import { setLocal,getLocal } from "./util/util.js"
import {addCommas} from "../useful-functions.js"

async function fetchData() {
  const res = await fetch("../../db/mockBooks.json");
  const data = await res.json();
  setLocal(data);
  console.log(data);
  return "bookInfo";
}


function renderData(datas) {
  console.log(datas);
  const itemContainer = document.querySelector(".item-container");
  const dataString = htmlTemplate(datas);
  itemContainer.innerHTML += dataString;
}

function htmlTemplate(datas) {

  return datas.map(data => {

    const { imgUrl, title, author, price} = data;
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
            <input type="text" value="1" class="add_btn_input" />
            <button class="add_btn">🔻</button>
          </div>
        </div>
        <div class="priceBox">
          <div>금액</div>
          <div>${newPrice}</div>
        </div>
        </div>`
  }).join('')
}


function App(){

  fetchData()
  .then(key => getLocal(key))
  .then(data => renderData(data));
}

App();
