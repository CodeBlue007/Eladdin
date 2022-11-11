import { setLocal, getLocal, setTotalPrice} from "../../util/util.js";

export function plusItem(event) {
    console.log(event.target);
    const { id } = event.target.dataset;
    const input = document.getElementById(id);
    const inputValue = parseInt(input.value);

    const local = getLocal("bookInfo");
    const targetIdx = local.findIndex(data => data.ISBN === parseInt(id));
    local[targetIdx].volume += 1;
    input.value = inputValue + 1;
    setLocal(local);
    setTotalPrice(local);
}


export function minusItem(event) {
    console.log(event.target);
    
    const { id } = event.target.dataset;
    const input = document.getElementById(id);
    const inputValue = parseInt(input.value);
    if (inputValue === 1) return;
    
    const local = getLocal("bookInfo");
    const targetIdx = local.findIndex(data => data.ISBN === parseInt(id));
    local[targetIdx].volume -= 1;
    input.value = inputValue - 1;
    setLocal(local);
    setTotalPrice(local);
}