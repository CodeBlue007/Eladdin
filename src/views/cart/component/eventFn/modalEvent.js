const order_btn = document.querySelector(".button.is-link.submit");
const confirm_btn = document.querySelector('.confirm-btn');
const close_btn = document.querySelector('.modal-close');
const modal = document.querySelector('.modal');

function showModal() {
  modal.classList.add('is-active');
}

function closeModal() {
  modal.classList.remove('is-active');
}


order_btn.addEventListener('click', showModal);
confirm_btn.addEventListener('click', closeModal);
close_btn.addEventListener('click', closeModal);
