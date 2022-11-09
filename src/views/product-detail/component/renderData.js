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
          <a href="#pop1" class="cart">장바구니</a>
          <div class="popup" id="pop1">
            <a href="./product-detail.html">닫기</a>
            <div class="move_to_cart">
              <span>장바구니로 이동하시겠습니까?</span>
            </div>
            <div class="next_move">
              <a href="#b">취소</a>
                <a href="../cart/cart.html" class="confirm">확인</a>
            </div>
          </div>
          <div class="dim"></div>
        </ul>
    </div>
        `;
}


export function renderData(datas) {
    const bookInfo = document.querySelector('.product-detail');
    const dataString = bookTemplate(datas);
    bookInfo.innerHTML = dataString;
}
