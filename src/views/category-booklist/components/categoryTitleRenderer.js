import { addCommas } from "../../useful-functions.js"
// import { addEventListeners } from "./eventListeners.js";

function renderBookList(datas) {
    const totalBookNum = datas.length;

    const categoryTitle = `
    <div class="essay-category-container">
        <div class="box" id="essayBooks">
            <p class="title is-5 has-text-info">에세이(${totalBookNum}권)</p>
        </div>
    </div>
    `;
    return categoryTitle;
}

export function renderTitleData(datas = []) {
    const itemContainer = document.querySelector(".category-categoryTitle-books-container");
    const dataString = renderBookList(datas);
    itemContainer.innerHTML = dataString;
}