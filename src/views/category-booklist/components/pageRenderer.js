import { addCommas } from "../../useful-functions.js"
import { renderTitleData } from "./categoryTitleRenderer.js";
// import { addEventListeners } from "./eventListeners.js";

let categories = [
    {
        title: '설계',
        quantity: 0
    },
    {
        title: '애자일',
        quantity: 0
    },
    {
        title: '프론트엔드',
        quantity: 0
    },
    {
        title: '테스트',
        quantity: 0
    }
    {
        title: '백엔드',
        quantity: 0
    },
    {
        title: '보안',
        quantity: 0
    },
    {
        title: '컴퓨터 과학',
        quantity: 0
    }
];

let bookInfo = '';

function renderCategoryTitle(datas) {
    return datas?.map(data => {
        const { category } = data;

        let categoryBookQuantity = 0;

        let categoryTitle = '';

        for (const elem of categories) {
            if (category === elem.title) {
                elem.quantity += 1;
            }
        }

        for (const elem of categories) {
            categoryTitle = `
                <div class="${elem.title}-category-container">
                    <div class="box" id="${elem.title}-books">
                        <p class="title is-5 has-text-info">${elem.title}(${elem.quantity}권)</p>
                    </div>
                </div>
            `;
        }

        console.log(categories);
        return categoryTitle;

    });//.join('');

    for (const elem of categories) {
        console.log(`${elem.title}: ${elem.quantity}`);
    }
}

function renderBookList(datas) {
    const totalBookNum = datas.length;

    return datas?.map(data => {
        // 책표지, 제목, 소개글, 저자, 출판사, 출판일, 가격, 이북, 카테고리 (key: ISBN)
        const { imgUrl, title, description, author, publisher, publicationDate, price, EBook, category, ISBN } = data;
        const commaPrice = addCommas(price);

        // for (const elem of categories) {
        bookInfo = `
            <div class="${category}-bookList-container">
                <div class="box" id="${category}-book">
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
                    </div>
                </div>
            </div>
        `;
        // }
        return bookInfo;
    }).join('');
}

export function renderBookData(datas = []) {
    const itemContainer = document.querySelector(".categoryTitle-books-container");
    const bookListHTML = renderBookList(datas);
    const categoryTitleHTML = renderCategoryTitle(datas);
    const bookContainer = document.createElement("div");
    const categoryContainer = document.createElement("div");
    bookContainer.id = 'bookList-container';
    categoryContainer.id = 'category-container';
    bookContainer.innerHTML = bookListHTML;
    categoryContainer.innerHTML = categoryTitleHTML;
    itemContainer.appendChild(categoryContainer);
    itemContainer.appendChild(bookContainer);
}