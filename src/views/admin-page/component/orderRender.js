import {addCommas} from "../../useful-functions.js";

function orderTemplate(datas) {
  return datas
    .map((data) => {
      const { title, price } = data;

      const newPrice = addCommas(price);

      return `
   <div class="orders">
      <ul class="order">
        <li class="orderDate">2022-11-04</li>
        <li class="bookTitle">${title}</li>
        <li class="count">1</li>
        <li class="price">${newPrice}원</li>
        <select class="shipping_select">
          <option value="">--배송현황--</option>
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

export function orderRender(datas) {
  const bookInfo = document.querySelector('.view-orders');
  const dataString = orderTemplate(datas);
  bookInfo.innerHTML += dataString;
}
