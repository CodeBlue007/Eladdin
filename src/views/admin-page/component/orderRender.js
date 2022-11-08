import {addCommas} from "../../useful-functions.js";
import { handleData } from "./handleOrders.js";

function orderTemplate(orders) {
  return orders
    .map((order) => {
      const { orderDate, title, volume, price, shippingStatus ,id} = order;

      const newPrice = addCommas(price);

      return `
   <div class="orders" id=${id}>
      <ul class="order">
        <li class="orderDate">${orderDate}</li>
        <li class="bookTitle">${title}</li>
        <li class="count">${volume}</li>
        <li class="price">${newPrice}원</li>
        <select class="shipping_select">
          <option value="wrapping-product">배송준비중</option>
          <option value="delivery-ready">배송중</option>
          <option value="delivering">배송완료</option>
        </select>
        <button class="cancelOrder-btn" data-id=${id}>주문취소</button>
      </ul>
    </div>`;
    })
    .join('');
}


export function orderRender(orders) {
  const bookInfo = document.querySelector('.view-orders');
  handleData(orders);
  // const dataString = orderTemplate(datas);
  // bookInfo.innerHTML += dataString;
}
