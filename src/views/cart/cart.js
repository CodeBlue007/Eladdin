import { setLocal } from "./util/util.js"

async function fetchData() {
  const res = await fetch("./data/data.json");
  const data = await res.json();
  setLocal(data);
  console.log(data);
  return data;
}

function renderData(datas) {
  const itemContainer = document.querySelector(".item-container");
  const dataString = htmlTemplate(datas);
  itemContainer.innerHTML += dataString;
}

function htmlTemplate(datas) {

  return datas.items.map(data => {

    const { itemName, itemPrice, itemNumber, itemImg, itemAuthor } = data;

    return `<div class="itembox">
        <div class="imgbox">
          <button id="select_btn"></button>
          <div>${itemImg}</div>
        </div>
        <div class="infoBox">
          <span>${itemName}/ ${itemAuthor}</span>
          <div class="add_btn_container">
            <button class="add_btn">🔺</button>
            <input type="text" value="1" class="add_btn_input" />
            <button class="add_btn">🔻</button>
          </div>
        </div>
        <div class="priceBox">
          <div>금액</div>
          <div>${itemPrice}</div>
        </div>
        </div>`
  })
}


fetchData()
  .then(data => renderData(data))
