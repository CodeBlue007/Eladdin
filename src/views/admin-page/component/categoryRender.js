

function categoryTemplate(datas){

    return datas.map((data) => {
        const {title:category , _id:id } = data;
        return (
        `<ul class="category-list" id =${id}>
        <li class="category-name">${category}</li>
        <button class="editCategory-btn">수정</button>
        <button class="deleteCategory-btn">삭제</button>
        </ul>`)
        
    }).join('');



}

export function categoryRender(datas){
    const viewContainer = document.querySelector(".category_container");
    viewContainer.innerHTML += categoryTemplate(datas);
}