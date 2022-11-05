async function fetchData() {
  const res = await fetch('../../db/mockBooks_1.json');
  const data = await res.json();
  console.log(data);
  return data;
}

function renderData(datas) {
  const bookInfo = document.querySelector('.view-orders');
  const dataString = htmlTemplate(datas);
  bookInfo.innerHTML += dataString;
}

function htmlTemplate(datas) {
  return datas
    .map((data) => {
      const { title, price } = data;

      return `
   <div class="orders">
      <ul class="order">
        <li class="orderDate">2022-11-04</li>
        <li class="bookTitle">${title}</li>
        <li class="count">1</li>
        <li class="price">${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</li>
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

fetchData().then((data) => renderData(data));
