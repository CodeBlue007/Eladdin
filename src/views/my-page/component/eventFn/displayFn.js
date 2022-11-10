


function showCartList() {
    
    const cartList = document.querySelector('.cart-products');

    if (cartList.style.display !== 'none') {
      cartList.style.display = 'none';
    } else {
      cartList.style.display = 'block';
    }
  }
  
  
  function showUserInfo() {
    
    const modal = document.querySelector('.modal');

    userInfo.style.display = 'block';
    modal.classList.remove('is-active');
  }
  
  