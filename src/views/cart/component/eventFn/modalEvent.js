export function closeModal() {
  const modal = document.querySelector('.modal');

  modal.classList.remove('is-active');

  window.location.href = "../home/home.html";
}


