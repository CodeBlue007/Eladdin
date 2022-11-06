import { showCategory, showOrder, showProduct } from "./eventFn/showCategory.js";

export function addEvents() {
  const orderManagement_btn = document.querySelector('.orderManagement');
  const categoryManagement_btn = document.querySelector('.categoryManagement');
  const productManagement_btn = document.querySelector('.productManegement');


  orderManagement_btn.addEventListener('click', showOrder);
  categoryManagement_btn.addEventListener('click', showCategory);
  productManagement_btn.addEventListener('click', showProduct);

}
