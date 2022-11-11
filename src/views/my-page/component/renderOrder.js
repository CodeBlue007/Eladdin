import {addCommas} from "../../useful-functions.js"

function OrderListTemplate(orderList) {
  return orderList.map(({ _id, items, shippingStatus, user, totalPrice }) => {

    if (!totalPrice) {
      totalPrice = items.reduce((acc, item) => acc + item.totalPrice, 0)
    }

    const newPrice = addCommas(totalPrice);

    return `
    <div class ="item_container" id= ${_id}>
    ${ItemListTemplate(items)}
    <div class="tag_container">
    <div class="control">
    <div class="tags has-addons is-two-thirds">
      <span class="tag is-dark">${shippingStatus}</span>
      <span class="tag is-success">${newPrice}원</span>
      </div>
      <button class="button is-danger" data-id="${_id}" data-shipping-status="${shippingStatus}">
      주문취소</button>
  </div>
  </div>
    
    `;
  }).join('');
}


function ItemListTemplate(items) {

  return items.map(item => {
    const { book: { imgUrl, title }, volume, totalPrice } = item;
    const curPrice = addCommas(totalPrice);

    return `
     <div class="box orderItem_container">
     <div class="box img_container"><img src =${imgUrl} alt=""/></div>
    <div class="box content_contianer">
      <div>${title}</div>
      <div>가격 : ${curPrice}</div>
      <div>수량 : ${volume}</div>
    </div>
  </div>`
  }).join('')
}


export function renderOrder(orderList) {
  const bookInfo = document.querySelector(".order-products");
  if(orderList.length ===0){
    bookInfo.innerHTML = "주문내역이 없습니다";
  }
  else{
    bookInfo.innerHTML = OrderListTemplate(orderList);
  }

}




