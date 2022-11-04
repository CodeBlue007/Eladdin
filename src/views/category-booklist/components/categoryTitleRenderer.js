import { addCommas } from "../../useful-functions.js"
// import { addEventListeners } from "./eventListeners.js";

function renderCategoryTitle(datas) {
    const totalBookNum = datas.length;

    return datas?.map(data => {
        const { category } = data;

        console.log(data.category);
        // const totalBookNum = data[category].length;

        const categoryTitle = `
            <div class="${category}-category-container">
                <div class="box" id="${category}Books">
                    <p class="title is-5 has-text-info">${category}(${totalBookNum}권)</p>
                </div>
            </div>
            `;
        return categoryTitle;
    }).join('');
}

export function renderTitleData(datas = []) {
    const itemContainer = document.querySelector(".categoryTitle-books-container");
    const dataString = renderCategoryTitle(datas);
    console.log(dataString);
    // const categoryTitle = itemContainer.createElement("div");
    // categoryTitle.setAttribute("class", )
    itemContainer.innerHTML = dataString;
}