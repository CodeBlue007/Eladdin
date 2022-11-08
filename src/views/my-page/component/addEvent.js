// const orderList = document.querySelector('.order-products');
const cartList = document.querySelector('.cart-products');
const userInfo = document.querySelector('.userInfo');
const modal = document.querySelector('.modal');
const userInfo_btn = document.querySelector('.userInfo_btn');
// const orderList_btn = document.querySelector('.order-list');
const cartList_btn = document.querySelector('.cart');
const confirm_btn = document.querySelector('.confirm-btn');
const modal_x_btn = document.querySelector('.modal-close');

function showCartList() {
  if (cartList.style.display !== 'none') {
    cartList.style.display = 'none';
  } else {
    cartList.style.display = 'block';
  }
}

function showModal() {
  modal.classList.add('is-active');
}

function closeModal() {
  modal.classList.remove('is-active');
}

function showUserInfo() {
  userInfo.style.display = 'block';
  modal.classList.remove('is-active');
}

// orderList_btn.addEventListener('click', showOrderList);
cartList_btn.addEventListener('click', showCartList);
userInfo_btn.addEventListener('click', showModal);
confirm_btn.addEventListener('click', showUserInfo);
modal_x_btn.addEventListener('click', closeModal);
