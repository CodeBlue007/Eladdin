const modal = document.querySelector('.modal');


export function closeModal() {
    modal.classList.remove('is-active');
}

export function showModal() {
    modal.classList.add('is-active');
}