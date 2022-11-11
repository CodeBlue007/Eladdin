import { getLocal, setLocal, setTotalPrice } from "../../util/util.js";

export function checkAll() {
    const selectAllBtn = document.querySelector('#selectAll_btn');
    const selectBtns = document.querySelectorAll(".imgbox button");
    const key = "bookInfo";
    const local = getLocal(key);
    const btnArrays = [selectAllBtn, ...selectBtns];

    if (selectAllBtn.classList.contains("checked")) {
        btnArrays.forEach(button => {
            button.classList.remove("checked");
        });
        const checkedNone = local.map(data => ({ ...data, checked: false }));
        setTotalPrice(checkedNone);
        setLocal(checkedNone);
    }
    else {
        btnArrays.forEach(button => {
            
            button.classList.add("checked");
        });
        const checkedAll = local.map(data => ({ ...data, checked: true }));
        setTotalPrice(checkedAll);
        setLocal(checkedAll);
    }
}

export function checkToggleOne(event) {
    const selectAllBtn = document.querySelector('#selectAll_btn');
    selectAllBtn.classList.remove("checked");
    event.target.classList.toggle("checked");
    const { id } = event.target.dataset;
    const key = "bookInfo";
    const local = getLocal(key);
    const targetIdx = local.findIndex(data => data.ISBN === parseInt(id));
    local[targetIdx].checked = !local[targetIdx].checked;
    setLocal(local);
    setTotalPrice(local);
}

