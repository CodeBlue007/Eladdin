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
        <ul class="products">
          <li class="book-title">${title}</li>
          <li class="EBook">${EBook}</li>
          <li class="author">${author}</li>
          <li class="publisher">${publisher}</li>
          <li class="intro">${description}</li>
          <li class="price">${price}</li>
          <li class="publicationDate">${publicationDate}</li>
          <button class="edit-btn">수정</button>
          <button class="delete-btn">삭제</button>
        </ul>
      </div>
    `;
    })
    .join('');
}

fetchData().then((data) => renderData(data));
