import {addCommas} from "../../useful-functions.js";

function orderTemplate(orders) {
  return orders
    .map((order) => {
      const { title, volume, price, shippingStatus } = order;

      const newPrice = addCommas(price);

      return `
   <div class="orders">
      <ul class="order">
        <li class="orderDate">2022-11-04</li>
        <li class="bookTitle">${title}</li>
        <li class="count">${volume}</li>
        <li class="price">${newPrice}원</li>
        <select class="shipping_select">
          <option value="wrapping-product">상품 준비 중</option>
          <option value="delivery-ready">배송 준비 중</option>
          <option value="delivering">배송 중</option>
        </select>
        <button class="cancelOrder-btn">주문취소</button>
      </ul>
    </div>`;
    })
    .join('');
}

function handleData(datas){

} //원하는 형식으로 데이터가공해야함.

function renderByShipping(shippingStatus){

}// 베송상태에 따라 rendering다르게;

export function orderRender(datas) {
  const bookInfo = document.querySelector('.view-orders');
  const dataString = orderTemplate(datas);
  bookInfo.innerHTML += dataString;
}
