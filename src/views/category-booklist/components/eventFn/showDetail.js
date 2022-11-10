

export function showDetail(e) {

    const { id } = e.target.dataset;

    localStorage.setItem("ISBN", JSON.stringify(id));

    window.location.href = "../product-detail/product-detail.html";

}
