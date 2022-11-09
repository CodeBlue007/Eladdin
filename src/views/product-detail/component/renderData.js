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
          <li class="title">${title}</li>
          <li class="author">저자 &nbsp;&nbsp;&nbsp;${author}</li>
          <li class="publisher">출판사 &nbsp;&nbsp;&nbsp;${publisher}</li>
          <li class="description">책 소개글 &nbsp;&nbsp;&nbsp;${description}</li>
          <li class="price">가격 &nbsp;&nbsp;&nbsp;${newPrice}원</li>
          <li class="publicationDate">출시일 &nbsp;&nbsp;&nbsp;${date}</li>
          <button" class="cart">장바구니</button>
        </ul>
    </div>
        `;
}


export function renderData(datas) {
    const bookInfo = document.querySelector('.product-detail');
    const dataString = bookTemplate(datas);
    bookInfo.innerHTML = dataString;
}
