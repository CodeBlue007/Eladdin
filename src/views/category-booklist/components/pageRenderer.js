import { addCommas } from "../../useful-functions.js"
// import { addEventListeners } from "./eventListeners.js";

function renderBookList(datas) {
    return datas?.map(data => {
        // 책표지, 제목, 소개글, 저자, 출판사, 출판일, 가격, 이북 (key: ISBN)
        const { imgUrl, title, description, author, publisher, publicationDate, price, EBook, ISBN } = data;
        const commaPrice = addCommas(price);

        return `
        <div class="essay-bookList-container">
            <div class="box" id="book">
                <div id="bookBox">
                    <div class="field">
                        <img src=${imgUrl} alt="bookcover" width="200"></img>
                    </div>
                    <div class="box" id="${ISBN}">
                        <div id="mainBookField">
                            <div class="field" id="bookName">
                                <p>${title}</p>
                            </div>
                            <div class="field infoValue" id="bookDescription">
                                <p>"${description}"</p>
                            </div>
                        </div>

                        <div id="author_publishField">
                            <div class="field" id="authorValue">
                                <p>${author}</p>
                            </div>
                            <div class="field infoValue" id="publisherValue">
                                <p>${publisher}</p>
                            </div>
                            <div class="field infoValue" id="publicationDateValue">
                                <p>${publicationDate}</p>
                            </div>
                        </div>
                        <div class="field" id="bookPrice">
                            <p>${commaPrice}원</p>
                        </div>
                        <div id="isEbookField">
                            <div class="field">
                                <p>eBook</p>
                            </div>
                            <div class="field infoValue">
                                <p>${EBook}</p>
                            </div>
                        </div>
                    </div>
                    <div id="cartButton">
                        <button class="button is-info is-fullwidth" id="submitCartButton">
                            장바구니
                        </button>
                    </div>
                </div>
            </div>
        </div>`
    }).join('');
}

export function renderBookData(datas = []) {
    const itemContainer = document.querySelector(".categoryTitle-books-container");
    const dataString = renderBookList(datas);
    itemContainer.innerHTML = dataString;
}