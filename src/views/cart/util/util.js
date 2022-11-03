import { addCommas } from "../../useful-functions.js"


export function setLocal(data = {}) {
  localStorage.setItem("bookInfo", JSON.stringify(data));
}

export function getLocal(key) {

  const localDatas = localStorage.getItem(key);

  return localDatas ? JSON.parse(localDatas) : [];
}

function getTotalPrice(datas) {
  const totalPrice = datas ? datas.reduce((acc, cur) => {
    if (cur.checked) {
      const price = Number(cur.price) * (cur.volume);
      acc += price;
    }
    return acc;
  }, 0) : 0;
  
  return totalPrice;
}

export function setTotalPrice(datas) {
  const priceTag = document.querySelector(".priceTag");
  const totalPrice = addCommas(getTotalPrice(datas));
  priceTag.innerText = `총금액 : ${totalPrice}`
}