export function closeModal() {
  const modal = document.querySelector('.modal');

  modal.classList.remove('is-active');

  window.location.href = "src/views/category-booklist/category-booklist.html";
}


