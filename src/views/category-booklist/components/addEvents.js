import { changeCategory } from "./eventFn/changeCategory.js";
import { showDetail } from "./eventFn/showDetail.js";

export function addEvents() {
    const tabContainer = document.querySelector(".tab_container");
    const detailBtn = document.querySelectorAll(".box .show_detail button");

    [...detailBtn].forEach(btn => {
        btn.addEventListener("click", showDetail);
    })
    tabContainer.addEventListener("click", changeCategory);


}
