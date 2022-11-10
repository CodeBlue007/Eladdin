

function categoryTemplate(datas){

    return datas.map((data) => {
        const {title:category , _id:id } = data;
        return (
        `<li>
        <a data-category=${category}>
          <span class="icon is-small" data-category=${category}
            >✔</span>
          <span data-category=${category}>${category}</span>
        </a>
      </li>`)
        
    }).join('');



}

export function categoryRender(datas){
    const viewContainer = document.querySelector(".tab_container");
    viewContainer.innerHTML = categoryTemplate(datas);
    viewContainer.firstElementChild.classList.add("is-active");
}