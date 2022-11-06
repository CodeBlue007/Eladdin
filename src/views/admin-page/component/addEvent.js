const orderManagement_btn = document.querySelector('.orderManagement');
const categoryManagement_btn = document.querySelector('.categoryManagement');
const productManagement_btn = document.querySelector('.productManegement');
const view_orders = document.querySelector('.view-orders');
const view_product = document.querySelector('.view-product');
const view_category = document.querySelector('.view-category');

function showOrderManagement() {
  view_orders.style.display = 'block';
  view_product.style.display = 'none';
  view_category.style.display = 'none';
}

function showCategoryManagement() {
  view_orders.style.display = 'none';
  view_product.style.display = 'none';
  view_category.style.display = 'block';
}

function showProductManagement() {
  view_orders.style.display = 'none';
  view_product.style.display = 'block';
  view_category.style.display = 'none';
}

orderManagement_btn.addEventListener('click', showOrderManagement);
categoryManagement_btn.addEventListener('click', showCategoryManagement);
productManagement_btn.addEventListener('click', showProductManagement);
