async function fetchData() {
  const res = await fetch('../../db/mockBooks.json');
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

    return `<img
    src=${imgUrl}
    width="150"
  />
  <ul class="book">
    <li class="title">${title}</li>
    <li class="price">${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</li>
  </ul>`;
  });
}

fetchData().then((data) => renderData(data));
