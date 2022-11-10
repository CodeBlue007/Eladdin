import {closeModal, showModal} from "./eventFn/modalFn.js";
import { checkPw } from "./eventFn/checkPw.js";
import { deleteUser } from "./eventFn/deleteUser.js";


export function addEvent(){
  // const orderList = document.querySelector('.order-products');
const userInfo = document.querySelector('.userInfo');
const userInfo_btn = document.querySelector('.userInfo_btn');
const orderList_btn = document.querySelector('.order-list');
const confirm_btn = document.querySelector('.confirm-btn');
const modal_x_btn = document.querySelector('.modal-close');
const deleteUser_Btn = document.querySelector(".deleteAccount");

// orderList_btn.addEventListener('click', showOrderList);
userInfo_btn.addEventListener('click', showModal);
modal_x_btn.addEventListener('click', closeModal);

confirm_btn.addEventListener("click", checkPw);
deleteUser_Btn.addEventListener("click", deleteUser);

}