import * as Api from "../../../api.js";


export async function deleteCategory(e) {
    if(!window.confirm("정말 삭제하시겠습니까? 삭제이후에는 복구 할 수 없습니다.")) return;

    try {
        const {id} = e.target.dataset;
        const categoryList = document.getElementById(id);
        const categoryName = categoryList.firstElementChild.textContent;
        console.log(categoryName);
        const data={'title':categoryName};
        await Api.delete(`https://eladin-lgurfdxfjq-du.a.run.app/api/category${categoryName}`,'',data);

    } catch (err) {
        console.error(err.stack);
        alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
    }

}

