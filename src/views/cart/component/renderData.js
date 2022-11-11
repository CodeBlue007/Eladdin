import { addCommas } from "../../useful-functions.js"
import { setTotalPrice } from "../util/util.js"
import { addEvents } from "./addEvents.js";

function addItems(datas=[]) {
  
  return datas?.map(data => {

    const { imgUrl, title, author, price, ISBN, volume} = data;
    const newPrice = addCommas(price);  

    return `<div class="itembox" data-id=${ISBN}> 
          <div class="imgbox">
            <button class="select_btn checked" data-id=${ISBN}></button>
            <img class="bookImg" src=${imgUrl} alt="book"></img>
          </div>
          <div class="infoBox">
            <span>${title}/ ${author}</span>
            <div class="add_btn_container">
              <button class="plus_btn" data-id=${ISBN}><i class="fa-solid fa-caret-up" data-id=${ISBN}></i></button>
              <input class="add_btn_input" type="text" id=${ISBN} disabled value=${volume}>
              <button class="minus_btn" data-id=${ISBN}><i data-id=${ISBN} class="fa-solid fa-caret-down"></i></button>
            </div>
          </div>
          <div class="priceBox">
            <button class="delete_btn" data-id=${ISBN}>X</button>
            <div class="newPrice">price</div>
            <div>${newPrice}</div>
          </div>
          </div>`
  }).join('');
}


function renderBTnColor(datas) {
  const selectBtns = document.querySelectorAll(".imgbox button");
  const btnArray = [...selectBtns];

  datas.forEach((data, idx) => {
    if (data.checked) {
      btnArray[idx].classList.add("checked");
    }
    else {
      btnArray[idx].classList.remove("checked");
    }
  });
}


export function renderData(datas = []) {
  const itemContainer = document.querySelector(".item-container");
  const dataString = addItems(datas);
  itemContainer.innerHTML = dataString;
  setTotalPrice(datas);
  renderBTnColor(datas);
  addEvents();
}

