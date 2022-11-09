const view_orders = document.querySelector('.view-orders');
const view_product = document.querySelector('.view-product');
const view_category = document.querySelector('.view-category');


export function showOrder() {
    view_orders.classList.remove("hidden");
    view_product.classList.add("hidden");
    view_category.classList.add("hidden");
}

export function showCategory() {
    view_orders.classList.add("hidden");
    view_category.classList.remove("hidden");
    view_product.classList.add("hidden");
}

export function showProduct() {
    view_orders.classList.add("hidden");
    view_category.classList.add("hidden");
    view_product.classList.remove("hidden");
}
