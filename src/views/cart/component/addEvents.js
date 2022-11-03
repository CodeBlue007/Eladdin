import { checkAll, checkToggleOne } from "./checkFn.js";
import { deleteAll, deleteOne } from "./deleteFn.js";
import { plusItem, minusItem } from "./modifyItems.js";

export function addEvents() {
    const deleteAllBtn = document.querySelector('#deleteall_btn');
    const deleteEach = document.querySelectorAll('.delete_btn');
    const plusBtn = document.querySelectorAll(".plus_btn");
    const minusBtn = document.querySelectorAll(".minus_btn");
    const checkAllbtn = document.querySelector("#selectAll_btn");
    const checkBtns = document.querySelectorAll(".imgbox .select_btn");

    deleteAllBtn.addEventListener("click", deleteAll);

    [...deleteEach].forEach(button => {
        button.addEventListener("click", deleteOne);
    });

    [...plusBtn].forEach(button => {
        button.addEventListener("click", plusItem)
    });

    [...minusBtn].forEach(button => {
        button.addEventListener("click", minusItem)
    });

    checkAllbtn.addEventListener("click", checkAll);

    checkBtns.forEach(button => {
        button.addEventListener("click", checkToggleOne)
    })


}

