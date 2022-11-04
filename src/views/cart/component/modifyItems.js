import { setLocal, getLocal } from "../util/util.js";
import { setTotalPrice } from "./renderData.js";

export function plusItem(event) {
    const input = event.target.nextElementSibling;
    const inputValue = parseInt(input.value);

    const { id } = event.target.dataset;
    const local = getLocal("bookInfo");
    const targetIdx = local.findIndex(data => data.ISBN === parseInt(id));
    local[targetIdx].volume += 1;
    input.value = inputValue + 1;
    setLocal(local);
    setTotalPrice(local);
}


export function minusItem(event) {
    const input = event.target.previousElementSibling;
    const inputValue = parseInt(input.value);
    if (inputValue === 1) return;
    
    const { id } = event.target.dataset;
    const local = getLocal("bookInfo");
    const targetIdx = local.findIndex(data => data.ISBN === parseInt(id));
    local[targetIdx].volume -= 1;
    input.value = inputValue - 1;
    setLocal(local);
    setTotalPrice(local);
}