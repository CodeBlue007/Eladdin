import * as Api from "../../../../api.js";
import { categoryRender } from "../../categoryRender.js";
import { editCategory } from "./editCategory.js";
import {deleteCategory} from "./deleteCategory.js";

export function addCategory() {


    try {
        const addBtn = document.querySelector(".button.is-info");
        const categoryInput = document.querySelector("#add_category");
        const modal = document.querySelector(".modal");

        modal.classList.add("is-active");

        addBtn.addEventListener("click", async () => {
            modal.classList.remove("is-active");
            const category = categoryInput.value;
            const reqData = {title : category};
            
            await Api.post("https://eladin-lgurfdxfjq-du.a.run.app/api/category/",reqData);
            alert("category를 성공적으로 추가했습니다.");

            const result = await Api.get(`https://eladin-lgurfdxfjq-du.a.run.app/api/category/${category}`,'');
            const newId = result._id;

            console.log(newId);
            const data = [{title : category, "_id" : newId}];
            categoryRender(data);
            const categoryDelBtns = document.querySelectorAll(".deleteCategory_btn");
            const categoryEditBtns = document.querySelectorAll(".editCategory_btn");

            [...categoryDelBtns].forEach(btn =>{
                btn.addEventListener("click", deleteCategory);
              });
                
              [...categoryEditBtns].forEach(btn =>{
                btn.addEventListener("click", editCategory);
              });

        })
        categoryInput.value ="";

    } catch (err) {
        console.error(err.stack);
        alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
    }
}


export function closeModal() {
    const modal = document.querySelector(".modal");

    modal.classList.remove("is-active");
}

