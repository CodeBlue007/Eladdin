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

export function renderCategoryData(datas = []) {
    const itemContainer = document.querySelector(".categoryTitle-books-container");
    setCategories(datas);

    // 카테고리 한번씩만 title 생성
    let categoryTitleHTML = '';
    categories.forEach(ctg => {
        categoryTitleHTML += renderCategoryList(datas, ctg.name);
    });
    const categoryContainer = document.createElement("div");
    categoryContainer.id = 'category-container';
    categoryContainer.innerHTML = categoryTitleHTML;
    itemContainer.appendChild(categoryContainer);
}
