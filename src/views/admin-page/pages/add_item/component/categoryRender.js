import * as Api from "../../../../api.js";

async function fetchCategory() {
    const categories = await Api.get("https://eladin-lgurfdxfjq-du.a.run.app/api/category");
    return categories;
}

function categoryTemplate(datas){

    return datas.map((data) => {
        const {title:category , _id:id } = data;
        return (
        `<option value=${category} id=${id}>${category}</option>`)

    }).join('');
}

export async function categoryRender(){
    const selectContainer = document.querySelector("#category_select");
    const datas = await fetchCategory();

    selectContainer.innerHTML += categoryTemplate(datas);
}