const view_orders = document.querySelector('.view-orders');
const view_product = document.querySelector('.view-product');
const view_category = document.querySelector('.view-category');


export function showOrder() {
    view_orders.style.display = 'block';
    view_product.style.display = 'none';
    view_category.style.display = 'none';
}

export function showCategory() {
    view_orders.style.display = 'none';
    view_product.style.display = 'none';
    view_category.style.display = 'block';
}

export function showProduct() {
    view_orders.style.display = 'none';
    view_product.style.display = 'block';
    view_category.style.display = 'none';
}
