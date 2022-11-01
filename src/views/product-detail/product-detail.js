async function fetchData() {
  const res = await fetch('./data/data.json');
  const data = await res.json();
  console.log(data);
  return data;
}

function renderData(datas) {
  const bookInfo = document.querySelector('.product-detail');
  const dataString = htmlTemplate(datas);
  bookInfo.innerHTML += dataString;
}

function htmlTemplate(datas) {
  return datas.map((data) => {
    const { imgUrl, title, EBook, author, publisher, description, price, publicationDate } = data;

    return `<img
        src=${imgUrl}
        width="500"
      />
      <ul class="book">
        <li class="title">${title}</li>
        <li class="eBook">eBook &nbsp;&nbsp;&nbsp;${EBook}</li>
        <li class="author">저자 &nbsp;&nbsp;&nbsp;${author}</li>
        <li class="publisher">출판사 &nbsp;&nbsp;&nbsp;${publisher}</li>
        <li class="description">책 소개글 &nbsp;&nbsp;&nbsp;${description}</li>
        <li class="price">가격 &nbsp;&nbsp;&nbsp;${price}원</li>
        <li class="publicationDate">출시일 &nbsp;&nbsp;&nbsp;${publicationDate}</li>
        <button class="cart"><a href="/cart">장바구니</a></button>
      </ul>
      `;
  });
}

fetchData().then((data) => renderData(data));
