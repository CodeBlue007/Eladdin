import { showCategory, showOrder, showProduct } from "./eventFn/renderItems.js";
import { addCategory, closeModal } from "./eventFn/addCategory.js";
import {deleteItem} from "./eventFn/deleteItem.js";

export function addEvents() {
  const orderManagement_btn = document.querySelector('.orderManagement');
  const categoryManagement_btn = document.querySelector('.categoryManagement');
  const productManagement_btn = document.querySelector('.productManegement');
  const categoryAddBtn = document.querySelector(".addCategory");
  const modalCloseBtn = document.querySelector(".modal-close");
  const deleteBtns = document.querySelectorAll(".delete-btn");
  
  orderManagement_btn.addEventListener('click', showOrder);
  categoryManagement_btn.addEventListener('click', showCategory);
  productManagement_btn.addEventListener('click', showProduct);
  categoryAddBtn.addEventListener("click", addCategory);
  modalCloseBtn.addEventListener("click", closeModal);

  [...deleteBtns].forEach(btn =>{
    btn.addEventListener("click", deleteItem);
  })

}
