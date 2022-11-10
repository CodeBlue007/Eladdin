import {sendData} from "./eventFn/sendData.js";


export function addEvent(bookData) {
  const cart_btn = document.querySelector('#cart');
  const toCartBtn = document.querySelector(".button.is-success.is-light.confirm")
  const notToCartBtn = document.querySelector(".button.is-success.is-light.del")

  console.log(toCartBtn,notToCartBtn);

  cart_btn.addEventListener('click',()=>sendData(bookData));
  toCartBtn.addEventListener("click", moveToCart);
  notToCartBtn.addEventListener("click", closeModal);

}

function moveToCart(){
  const modal = document.querySelector(".modal");

  modal.classList.remove("is-active");

  window.location.href= "../cart/cart.html";
}

function closeModal(){
  const modal = document.querySelector(".modal");
  modal.classList.remove("is-active");
}