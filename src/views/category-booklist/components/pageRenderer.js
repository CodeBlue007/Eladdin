import { addCommas } from "../../useful-functions.js"
import { addEvents } from "./eventListeners.js";
import { } from "./util/pagination.js"

function renderBookList(datas) {

    return datas?.map(data => {
        // 책표지, 제목, 소개글, 저자, 출판사, 출판일, 가격, 이북 (key: ISBN)
        const { imgUrl, title, description, author, publisher, publicationDate, price, EBook, ISBN } = data;

        commaPrice = addCommas(price);

        return `
        <div class="essay-category-container">
            <div class="box" id="essayBooks">
                <p class="title is-5 has-text-info">에세이(${data.length}권)</p>
            </div>
        </div>

        <div class="essay-bookList-container">
            <div class="box" id="book">
                <div id="bookBox">
                    <div class="field">
                        <img src=${imgUrl} alt="bookcover" width="200"></img>
                    </div>
                    <div class="box" id="${ISBN}">
                        <div id="mainBookField">
                            <div class="field" id="bookName">
                                <p>${title}</p> //span? p?
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
                            <p>`${ commaPrice } 원`</p>
                        </div>
                        <div id="isEbookField">
                            <div class="field">
                                <p>eBook</p>
                            </div>
                            <div class="field infoValue">
                                <p>true</p>
                            </div>
                        </div>
                        <!-- <span class="icon">
                        <i class="fa-solid fa-arrow-right"></i>
                    </span> -->
                        <!-- <div class="field">
                        <li>(판매가)13,500원</li>
                    </div> -->
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

export function renderData(datas = []) {
    const itemContainer = document.querySelector(".categoryTitle-books-container");
    const dataString = renderBookList(datas);
    itemContainer.innerHTML = dataString;
    addEvents();
}

