const orderList = document.querySelector('.order-products');
const cartList = document.querySelector('.cart-products');
const userInfo = document.querySelector('.userInfo');
const orderList_btn = document.querySelector('.order-list');
const cartList_btn = document.querySelector('.cart');
const userInfo_btn = document.querySelector('.userInfo_btn');

function showOrderList() {
  if (orderList.style.display !== 'none') {
    orderList.style.display = 'none';
  } else {
    orderList.style.display = 'block';
  }
}

function showCartList() {
  if (cartList.style.display !== 'none') {
    cartList.style.display = 'none';
  } else {
    cartList.style.display = 'block';
  }
}

function showUserInfo() {
  if (userInfo.style.display !== 'none') {
    userInfo.style.display = 'none';
  } else {
    userInfo.style.display = 'block';
  }
}

orderList_btn.addEventListener('click', showOrderList);
cartList_btn.addEventListener('click', showCartList);
userInfo_btn.addEventListener('click', showUserInfo);
