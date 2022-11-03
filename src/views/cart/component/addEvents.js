import { checkAll, checkToggleOne } from "./eventFn/checkFn.js";
import { deleteAll, deleteOne } from "./eventFn/deleteFn.js";
import { plusItem, minusItem } from "./eventFn/modifyItems.js";
import { makeOrder, modifyOrder} from "./eventFn/orderFn.js";

export function addEvents() {

    const deleteAllBtn = document.querySelector('#deleteall_btn');
    const deleteEach = document.querySelectorAll('.delete_btn');
    const plusBtn = document.querySelectorAll(".plus_btn");
    const minusBtn = document.querySelectorAll(".minus_btn");
    const checkAllbtn = document.querySelector("#selectAll_btn");
    const checkBtns = document.querySelectorAll(".imgbox .select_btn");
    const orderBtn = document.querySelector(".orderbar .order_btn");
    const orderModifyBtn = document.querySelector(".label_container button");
    
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
    });

    orderBtn.addEventListener("click", makeOrder);

    orderModifyBtn.addEventListener("click", modifyOrder);
    
}

