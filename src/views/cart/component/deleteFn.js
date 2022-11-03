import { setLocal, getLocal } from "../util/util.js";
import { renderData } from "./renderData.js";

export function deleteAll() {
    const selectAllBtn = document.querySelector('#selectAll_btn');
    selectAllBtn.classList.remove("checked");
    setLocal();
    renderData();
}


export function deleteOne(event) {
    const { id } = event.target.dataset;
    const local = getLocal("bookInfo");
    const filtered = local.filter(data => data.ISBN !== parseInt(id));
    console.log(filtered);
    setLocal(filtered);
    renderData(filtered);
}