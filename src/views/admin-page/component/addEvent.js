import { showCategory, showOrder, showProduct } from "./eventFn/renderItems.js";
import { addCategory, closeModal } from "./eventFn/addCategory.js";
import {deleteItem} from "./eventFn/deleteItem.js";
import { editCategory } from "./eventFn/editCategory.js";
import { deleteCategory } from "./eventFn/deleteCategory.js"; 

export function addEvents() {
  const orderManagement_btn = document.querySelector('.orderManagement');
  const categoryManagement_btn = document.querySelector('.categoryManagement');
  const productManagement_btn = document.querySelector('.productManegement');
  const categoryAddBtn = document.querySelector(".addCategory");
  const modalCloseBtn = document.querySelector(".modal-close");
  const itemDeleteBtns = document.querySelectorAll(".delete_btn");
  const categoryDelBtns = document.querySelectorAll(".deleteCategory_btn");
  const categoryEditBtns = document.querySelectorAll(".editCategory_btn");
  
  
  orderManagement_btn.addEventListener('click', showOrder);
  categoryManagement_btn.addEventListener('click', showCategory);
  productManagement_btn.addEventListener('click', showProduct);
  categoryAddBtn.addEventListener("click", addCategory);
  modalCloseBtn.addEventListener("click", closeModal);

  [...itemDeleteBtns].forEach(btn =>{
    btn.addEventListener("click", deleteItem);
  });

  [...categoryDelBtns].forEach(btn =>{
    btn.addEventListener("click", deleteCategory);
  });
    
  [...categoryEditBtns].forEach(btn =>{
    btn.addEventListener("click", editCategory);
  })


}
