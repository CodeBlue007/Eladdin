import { addCommas } from "../../useful-functions.js";
import { renderByShipping } from "./handleOrders.js";

function orderTemplate(orders) {
  let orderString = '';

  if (!orders) return "주문내역이 없습니다";

  orders.forEach(order => {
    console.log(order);

    const { createdAt, items, shippingStatus, _id: orderId ,user} = order;
    const fullName = user? user.fullName : "비단구렁이";
    const orderDate = createdAt? createdAt.slice(0,10) : "1997-10-23";
    let itemString = '';
    let volumeString = '';
    let priceString = '';

    const shippingString = renderByShipping(shippingStatus, orderId);

    items.forEach(bookData => {
      const { book, totalPrice, volume } = bookData;
      const title = book? book.title : "삭제된 책입니다";
      
      itemString += bookTemplate(title);
      volumeString += volumeTemplate(volume);
      priceString += priceTemplate(totalPrice);
    })

    orderString += `<div class="order" id=${orderId}>
    <div class="orderDate">${orderDate}</div>
    <div class ="fullName">${fullName}</div>`

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

function bookTemplate(title) {
  return `<div>${title}</div>`
}

function volumeTemplate(volume) {
  return `<div>${volume}</div>`;
}

function priceTemplate(price) {
  const newPrice = addCommas(price);
  return `<div>${newPrice}</div>`;
}




export function orderRender(orders) {
  const bookInfo = document.querySelector('.view-orders');
  const dataString = orderTemplate(orders);
  bookInfo.innerHTML += dataString;
}
