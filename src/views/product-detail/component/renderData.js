import { addCommas } from "../../useful-functions.js";

function bookTemplate(data) {

    const { imgUrl, title, EBook, author, publisher, description, price, publicationDate } = data;
    const newPrice = addCommas(price);
    const date = publicationDate.slice(0, 10);

    return `
    <div class="item_container>
     <div class="img_container">
     <img src=${imgUrl} alt="책이미지"/>
     </div>
     <ul class="book">
          <li id="title">${title}</li>
          <li id="description">"${description}"</li>
          <li id="author">저자 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${author}</li>
          <li id="publisher">출판사 &nbsp;&nbsp;&nbsp;${publisher}</li>
          <li id="price">가격 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${newPrice}원</li>
          <li id="publicationDate">출시일 &nbsp;&nbsp;&nbsp;${date}</li>
          <button id="cart">장바구니 추가</button>
        </ul>
    </div>
        `;
}


export function renderData(datas) {
    const bookInfo = document.querySelector('.product-detail');
    const dataString = bookTemplate(datas);
    bookInfo.innerHTML = dataString;
}
