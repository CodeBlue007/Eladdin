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
  }).join("\n");
}


function ItemListTemplate(items) {

  return items.map(item => {
    const { book: { imgUrl, title }, volume, totalPrice } = item;

    return `
     <div class="box orderItem_container">
     <div class="box img_container"><img src =${imgUrl} alt=""/></div>
    <div class="box content_contianer">
      <div>${title}</div>
      <div>가격 : ${totalPrice}</div>
      <div>수량 : ${volume}</div>
    </div>
  </div>`
  })
}


export function renderOrder(orderList) {
  const bookInfo = document.querySelector(".order-products");
  if(orderList.length ===0){
    bookInfo.innerHTML = "주문내역이 없습니다";
  }
  else{
    bookInfo.innerHTML = OrderListTemplate(orderList);
  }

  // bookInfo.addEventListener('click', async (event) => {
  //   const deleteButton = event.target;
  //   console.log('event.target', deleteButton)
  //   console.log('dataset', deleteButton.dataset)


  //   const { orderId, shippingStatus } = deleteButton.dataset;

  //   if (shippingStatus !== "배송준비중") {
  //     alert('배송준비중 일 때에만 취소가 가능합니다!')
  //   } 
  //   else if (confirm(`주문id: ${orderId}, 주문상태: ${shippingStatus}. \n 정말 취소하시겠어요?`)) {
  //     await Api.delete(`https://eladin-lgurfdxfjq-du.a.run.app/api/order/${orderId}`)

  //     const orderListItem = deleteButton.parentElement
  //     orderListItem.remove();
  //     alert('취소되었습니다!');
  //   }
  // })
}




