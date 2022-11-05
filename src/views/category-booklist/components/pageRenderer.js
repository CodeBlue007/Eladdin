import { addCommas } from "../../useful-functions.js"

let categories = [
    {
        name: '에세이',
        cnt: 0
    },
    {
        name: '여행',
        cnt: 0
    },
    {
        name: '자기계발',
        cnt: 0
    },
    {
        name: '컴퓨터/모바일',
        cnt: 0
    },
    {
        name: '추리소설',
        cnt: 0
    },
];

let bookInfo = '';

let categoryTitle = '';

let cnt = 0;

function setCategories(datas) {
    datas.forEach(data => {
        const { category } = data;

        categories.forEach(ctg => {
            if (category == ctg.name) {
                ctg.cnt++;
            }
        });
    });
}

function renderBookList(datas) {
    const totalBookNum = datas.length;

    return datas?.map(data => {
        // 책표지, 제목, 소개글, 저자, 출판사, 출판일, 가격, 이북, 카테고리 (key: ISBN)
        const { imgUrl, title, description, author, publisher, publicationDate, price, EBook, category, ISBN } = data;
        const commaPrice = addCommas(price);

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
        return bookInfo;
    }).join('');
}

function renderCategoryList(datas, category) {
    let categoryQuantity = 0;

    categories.forEach(ctg => {
        if (Object.values(ctg)[0] === category)
            categoryQuantity = ctg.cnt;
    });

    categoryTitle =
        `
            <div class="${category}-category-container">
                <div class="box" id="${category}-books">
                    <p class="title is-5 has-text-info">${category}(${categoryQuantity}권)</p>
                </div>
            </div>
        `;
    return categoryTitle;
}

export function renderBookData(datas = []) {
    const itemContainer = document.querySelector(".categoryTitle-books-container");
    const bookListHTML = renderBookList(datas);
    setCategories(datas);

    // 카테고리 한번씩만 title 생성
    let categoryTitleHTML = '';
    datas.forEach(data => {
        let { category } = data;

        categories.forEach(ctg => {
            if (category == ctg.name) {
                categoryTitleHTML = renderCategoryList(datas, category = '에세이'); // 해당 자리에 click event로 얻은 카테고리名 할당
            }
        });
    });
    // const categoryTitleHTML = renderCategoryList(datas, categories); // 전체 책에 대해 카테고리 title 전부 생성
    const bookContainer = document.createElement("div");
    const categoryContainer = document.createElement("div");
    bookContainer.id = 'bookList-container';
    categoryContainer.id = 'category-container';
    bookContainer.innerHTML = bookListHTML;
    categoryContainer.innerHTML = categoryTitleHTML;
    itemContainer.appendChild(categoryContainer);
    itemContainer.appendChild(bookContainer);
}
