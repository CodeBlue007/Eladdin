import {addCommas} from "../../useful-functions.js";

function productTemplate(datas) {
    return datas
      .map((data) => {
        const { imgUrl,ISBN, title, EBook, author, publisher, description, price, publicationDate } = data;

        const newPrice = addCommas(price);
  
        return `
        <div class="product-list" id =${ISBN}>
          <img class="book-img" src=${imgUrl} width="50"/>
          <div class="book-title">${title}</div>
          <div class="EBook">${EBook}</div>
          <div class="author">${author}</div>
          <div class="publisher">${publisher}</div>
          <div class="intro">${description}</div>
          <div class="price">${newPrice}원</div>
          <div class="publicationDate">${publicationDate}</div>
          <button class="edit-btn">수정</button>
          <button class="delete-btn" data-id=${ISBN}>삭제</button>
        </div>
      `;
      })
      .join('');
  }
  
  export function productRender(datas) {
    const bookInfo = document.querySelector('.view-product');
    const dataString = productTemplate(datas);
    bookInfo.innerHTML += dataString;
  }
  
  