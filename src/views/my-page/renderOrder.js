import * as Api from "../api.js";

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

// [{
//   "_id": "636c97167956c5faa23a371c",
//   "items": [
//     {
//       "book": {
//         "_id": "6367cd4d5379703b059c5910",
//         "imgUrl":
//           "https://image.aladin.co.kr/product/777/20/cover500/8984314234_1.jpg",
//         "title": "나는 왜 쓰는가",
//         "ISBN": 9788984314238,
//         "EBook": false,
//         "author": ["조이 오웰"],
//         "publisher": "한겨레출판",
//         "description": "조지 오웰 에세이",
//         "price": 18000,
//         "publicationDate": "2010-09-15T00:00:00.000Z",
//         "category": "63655d2d9fa016a83229b11c",
//       },
//       "volume": 1,
//       "totalPrice": 18000,
//       "_id": "636c97167956c5faa23a371b",
//     },
//   ],
//   "shippingStatus": "배송준비중",
//   "user": {
//     "_id": "63690ba83800baf323e9002a",
//     "email": "python4@naver.com",
//     "fullName": "비단구렁이",
//     "password": "$2b$10$lmSjJd0K/VtYl3FVAu54x.3rptmJAYkZ74HWeA8qlvzkcZbl6aESG",
//     "phoneNumber": "010-1111-1111",
//     "address": {
//       "postalCode": "111-111",
//       "address1": "경기도 용궁시 용왕구 999번길",
//       "address2": "풀숲아파트 103동 205호",
//     },
//     "role": "basic-user",
//     "createdAt": "2022-11-07T13:44:08.068Z",
//     "updatedAt": "2022-11-07T13:44:08.068Z",
//     "__v": 0,
//   },
//   "__v": 0,
// }];
