import { addCommas } from "../../useful-functions.js";
import { handleData, renderByShipping } from "./handleOrders.js";

function orderTemplate(orders) {
  let orderString = '';

  if(!orders) return;

  orders.forEach(order => {

    const {orderDate, shippingStatus, orderId } = order[0];

    orderString +=`<div class="order" id=${orderId}>
    <div class="orderDate">${orderDate}</div>`

    let itemString ='';
    let volumeString ='';
    let priceString ='';

    const shippingString = renderByShipping(shippingStatus ,orderId);


    order.forEach(item => {
      const {title,price,volume} = item;
      itemString += bookTemplate(title)
      volumeString += volumeTemplate(volume)
      priceString += priceTemplate(price)
    });

    console.log(itemString, volumeString, priceString);

    orderString += 
    `<div class="book_container">${itemString}</div>
    <div class="count_container">
    ${volumeString}
    </div>
    <div class="price_container">
    ${priceString}
    </div>
    ${shippingString}
    <button class="cancelOrder-btn" data-id=${orderId}>주문취소</button>
    </div>
    `
  })

  return orderString;
}

function bookTemplate(title){
  return `<div>${title}</div>`
}

function volumeTemplate(volume){
  return `<div>${volume}</div>`;
}

function priceTemplate(price){
    const newPrice = addCommas(price);
    return `<div>${newPrice}</div>`;
}




export function orderRender(orders) {
  const bookInfo = document.querySelector('.view-orders');
  const orderfiltered = handleData(orders);
  const dataString = orderTemplate(orderfiltered);
  bookInfo.innerHTML += dataString;
}
