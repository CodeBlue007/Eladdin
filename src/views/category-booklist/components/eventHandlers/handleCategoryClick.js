import { renderBookData } from "../pageRenderer.js"

const categories = ['설계', '애자일', '프론트엔드', '백엔드', '테스트', '보안', '컴퓨터 과학'];

export function handleCategoryClick(e) {
    e.preventDefault();
    categories.forEach(element => {
        if (element == e.srcElement.innerHTML) {
            console.log(element);
        }
    });

    // 누른 카테고리명에 따라 카테고리 title & bookList 다르게 render 예정
}

// export function handleCategoryClick(e, data) {
//     e.preventDefault();
//     console.log(e.srcElement.innerHTML);
//     categories.forEach(element => {
//         if (element == e.srcElement.innerHTML) {
//             renderBookData(data, element);
//         }
//     });
// }