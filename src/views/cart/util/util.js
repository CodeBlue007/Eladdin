import { addCommas } from "../../useful-functions.js"


export function setLocal(data = []) {
  localStorage.setItem("bookInfo", JSON.stringify(data));
}

export function getLocal(key) {

  const localDatas = localStorage.getItem(key);

  return localDatas ? JSON.parse(localDatas) : [];
}

export function getTotalPrice(datas) {
  const totalPrice = datas ? datas.reduce((acc, cur) => {
    if (cur.checked) {
      const price = Number(cur.price) * (cur.volume);
      acc += price;
    }
    return acc;
  }, 0) : 0;

  return addCommas(totalPrice);
}

export function setTotalPrice(datas) {
  const priceTag = document.querySelector(".priceTag");
  const totalPrice = getTotalPrice(datas);
  priceTag.innerText = `총금액 : ${totalPrice}`
}

export function getFullDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const nowDate = `${year}/${month}/${date}`;

  return nowDate;
}