async function fetchData() {
  const res = await fetch('../../db/mockBooks_1.json');
  const data = await res.json();
  console.log(data);
  return data;
}

function renderData(datas) {
  const bookInfo = document.querySelector('.order-products');
  const dataString = htmlTemplate(datas);
  bookInfo.innerHTML += dataString;
}

function htmlTemplate(datas) {
  return datas.map((data) => {
    const { imgUrl, title, price } = data;

    return `
  <ul class="order">
    <img src=${imgUrl} width="150"/>
    <li class="title">${title}</li>
    <li class="price">${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</li>
    <button class="cancel-order">주문취소</class>
  </ul>`;
  });
}

fetchData().then((data) => renderData(data));
