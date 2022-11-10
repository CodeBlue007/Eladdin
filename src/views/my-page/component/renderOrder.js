
function OrderListTemplate(orderList) {
  return orderList.map(({ _id, items, shippingStatus, user, totalPrice }) => {

    if(!totalPrice){
      totalPrice = items.reduce((acc, item) => acc + item.totalPrice, 0)
    }

    return `
  <li class="order">
    <span>${user.fullName}</span>
    ${ItemListTemplate(items)}
    <p>${shippingStatus}</p>
    <p>총 주문 금액 :${totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
    <button class="cancel-order"  data-order-id="${_id}" data-shipping-status="${shippingStatus}">
    주문취소
    </button>
    </li>`;
  }).join("\n");
}


function ItemListTemplate(items) {
  return `
  <ul>${items.map(({ book: { imgUrl, title }, volume, totalPrice }) => `
    <li>
      <img src=${imgUrl} width="150"/>
      <h3>${title}</h3>
      <span>${volume} 권</span>
      <span class="price">${totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</span>
    </li>
    `).join('')}
  </ul>`
}


export function renderOrder(orderList) {
  const bookInfo = document.querySelector(".order-products");
  bookInfo.innerHTML = OrderListTemplate(orderList);

  bookInfo.addEventListener('click', async (event)=> {
    const deleteButton = event.target;
    console.log('event.target', deleteButton)
    console.log('dataset', deleteButton.dataset)
    

    const { orderId, shippingStatus } = deleteButton.dataset;

    if(shippingStatus !== "배송준비중"){
      alert('배송준비중 일 때에만 취소가 가능합니다!')
    } else if (confirm(`주문id: ${orderId}, 주문상태: ${shippingStatus}. \n 정말 취소하시겠어요?`)) {
      await Api.delete(`https://eladin-lgurfdxfjq-du.a.run.app/api/order/${orderId}`)
      
      const orderListItem = deleteButton.parentElement
      orderListItem.remove();
      alert('취소되었습니다!')
    }
  })
}




