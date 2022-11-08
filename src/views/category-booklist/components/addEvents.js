import { renderCategory } from "./eventFn/renderCategory.js";

export function addEvents() {
    const tabContainer = document.querySelector(".tab_container");



    tabContainer.addEventListener("click", renderCategory);

   
}
