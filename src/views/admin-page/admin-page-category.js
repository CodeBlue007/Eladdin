function renderData(datas) {
  const bookInfo = document.querySelector('.view-content_2');
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
  <ul class="order">
    <li class="title">${title}</li>
    <li class="price">${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</li>
  </ul>`;
  });
}
