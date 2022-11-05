async function fetchData() {
  const res = await fetch('../../db/mockBooks_1.json');
  const data = await res.json();
  console.log(data);
  return data;
}

function renderData(datas) {
  const bookInfo = document.querySelector('.view-product');
  const dataString = htmlTemplate(datas);
  bookInfo.innerHTML += dataString;
}

function htmlTemplate(datas) {
  return datas
    .map((data) => {
      const { imgUrl, title, EBook, author, publisher, description, price, publicationDate } = data;

      return `
      <div class="product-list">
        <img class="book-img" src=${imgUrl} width="50"/>
        <div class="book-title">${title}</div>
        <div class="EBook">${EBook}</div>
        <div class="author">${author}</div>
        <div class="publisher">${publisher}</div>
        <div class="intro">${description}</div>
        <div class="price">${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</div>
        <div class="publicationDate">${publicationDate}</div>
        <button class="edit-btn">수정</button>
        <button class="delete-btn">삭제</button>
      </div>
    `;
    })
    .join('');
}

fetchData().then((data) => renderData(data));
