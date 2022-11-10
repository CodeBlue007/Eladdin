import {closeModal, showModal} from "./eventFn/modalFn.js";
import { checkPw } from "./eventFn/checkPw.js";
import { deleteUser } from "./eventFn/deleteUser.js";
import { deleteOrder } from "./eventFn/deleteOrder.js";
import { showOrder } from "./eventFn/displayFn.js";


export function addEvent(){
const userInfo = document.querySelector('.userInfo');
const userInfo_btn = document.querySelector('.userInfo_btn');
const orderList_btn = document.querySelector('.order-list');
const confirm_btn = document.querySelector('.confirm-btn');
const modal_x_btn = document.querySelector('.modal-close');
const deleteUser_Btn = document.querySelector(".deleteAccount");
const orderDel_btn = document.querySelectorAll(".button.is-danger");


userInfo_btn.addEventListener('click', showModal);
modal_x_btn.addEventListener('click', closeModal);

orderList_btn.addEventListener("click", showOrder);

confirm_btn.addEventListener("click", checkPw);
deleteUser_Btn.addEventListener("click", deleteUser);

[...orderDel_btn].forEach(btn =>{
  btn.addEventListener("click", deleteOrder);
})

}