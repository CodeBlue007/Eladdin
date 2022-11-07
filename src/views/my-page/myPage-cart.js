async function fetchData() {
  const res = await fetch('../../db/mockBooks_1.json');
  const data = await res.json();
  console.log(data);
  return data;
}

function renderData(datas) {
  const bookInfo = document.querySelector('.cart-products');
  const dataString = htmlTemplate(datas);
  bookInfo.innerHTML += dataString;
}

function htmlTemplate(datas) {
  return datas.map((data) => {
    const { imgUrl, title, price } = data;

    return `
  <ul class="book">
    <img src=${imgUrl} width="150"/>
    <li class="title">${title}</li>
    <li class="price">${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</li>
    <button class="remove-product">상품 삭제</class>
    <button class="order-product">주문하기</class>
  </ul>`;
  });
}

fetchData().then((data) => renderData(data));
