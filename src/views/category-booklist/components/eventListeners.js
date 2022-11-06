import { handleCategoryClick } from './eventHandlers/handleCategoryClick.js';

export function addEventListeners(data) {
    const categories = ['설계', '애자일', '프론트엔드', '백엔드', '테스트', '보안', '컴퓨터 과학'];

    let category = document.querySelectorAll(`#category > div > li > a`);

    category.forEach(element => {
        if (categories.includes(element.innerHTML)) {
            // element.addEventListener("click", function () { handleCategoryClick(data) });
            element.addEventListener("click", handleCategoryClick);
        }
    });
}

