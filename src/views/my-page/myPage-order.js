import { viewOrderList } from './component/viewOrderList.js';

async function fetchData() {
  const data = await fetch(viewOrderList());
}

function renderData(datas) {
  const bookInfo = document.querySelector('.order-products');
  const dataString = htmlTemplate(datas);
  bookInfo.innerHTML += dataString;
}

function htmlTemplate(datas) {
  return datas.map((data) => {
    const { imgUrl, title, volume, price } = data;

    return `
  <ul class="order">
    <img src=${imgUrl} width="150"/>
    <li class="title">${title}</li>
    <li class="title">${volume}</li>
    <li class="price">${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</li>
    <button class="cancel-order">주문취소</class>
  </ul>`;
  });
}

fetchData().then((data) => renderData(data));

const orderList = document.querySelector('.order-products');
const orderList_btn = document.querySelector('.order-list');

function showOrderList() {
  if (orderList.style.display !== 'none') {
    orderList.style.display = 'none';
  } else {
    orderList.style.display = 'block';
  }
}

orderList_btn.addEventListener('click', showOrderList);
