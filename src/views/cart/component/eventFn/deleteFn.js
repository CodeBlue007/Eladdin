import { setLocal, getLocal } from "../../util/util.js";
import { setTotalPrice } from "../../util/util.js";

export function deleteAll() {
    const selectAllBtn = document.querySelector('#selectAll_btn');
    const itemContainer = document.querySelector(".item-container");
    selectAllBtn.classList.remove("checked");
    itemContainer.innerHTML = '';
    setLocal();
    setTotalPrice();
}


export function deleteOne(event) {
    const { id } = event.target.dataset;
    const targetbox = document.querySelector(`.itembox[data-id="${id}"]`);
    const local = getLocal("bookInfo");
    const filtered = local.filter(data => data.ISBN !== parseInt(id));
    console.log(filtered);
    targetbox.remove();
    setLocal(filtered);
    setTotalPrice(filtered);
}