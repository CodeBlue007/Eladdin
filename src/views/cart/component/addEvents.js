import { checkAll, checkToggleOne } from "./eventFn/checkFn.js";
import { deleteAll, deleteOne } from "./eventFn/deleteFn.js";
import { plusItem, minusItem } from "./eventFn/modifyItems.js";
import { makeOrder, modifyOrder } from "./eventFn/orderFn.js";
import { sendForm } from "./eventFn/sendForm.js";
import {closeModal} from "./eventFn/modalEvent.js";

export function addEvents() {

    const deleteAllBtn = document.querySelector('#deleteall_btn');
    const deleteEach = document.querySelectorAll('.delete_btn');
    const plusBtn = document.querySelectorAll(".plus_btn");
    const minusBtn = document.querySelectorAll(".minus_btn");
    const checkAllbtn = document.querySelector("#selectAll_btn");
    const checkBtns = document.querySelectorAll(".imgbox .select_btn");
    const orderBtn = document.querySelector(".orderbar .order_btn");
    const orderModifyBtn = document.querySelector(".label_container button");
    const sumbitBtn = document.querySelector(".button.is-link.submit");
    const confirm_btn = document.querySelector('.confirm-btn');
    const close_btn = document.querySelector('.modal-close');

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

    sumbitBtn.addEventListener("click", sendForm);

    confirm_btn.addEventListener('click', closeModal);

    close_btn.addEventListener('click', closeModal);
}

