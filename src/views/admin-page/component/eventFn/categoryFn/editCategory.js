import * as Api from "../../../../api.js";
import { categoryRender } from "../../categoryRender.js";



export async function editCategory(){
    if(!window.confirm("정말 수정하시겠습니까 ? 수정 이후에는 복구 할 수 없습니다.")) return;


    try {
        const addBtn = document.querySelector(".button.is-info");
        const categoryInput = document.querySelector("#add_category");
        const modal = document.querySelector(".modal");

        modal.classList.add("is-active");

        addBtn.addEventListener("click", async () => {
            modal.classList.remove("is-active");
            const category = categoryInput.value;
            const reqData = {title : category};
            
            const result = await Api.post("https://eladin-lgurfdxfjq-du.a.run.app/api/category/",reqData);
            alert("category를 성공적으로 수정했습니다.");
            const data = [{title : category, "_id" : randomId()}];
            categoryRender(data);
        })
        categoryInput.value ="";

    } catch (err) {
        console.error(err.stack);
        alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
    }
}

