import { modifyInfo } from "./eventFn/modifyInfo.js";

export function addEvents() {

    const send_Btn = document.querySelector(".button.is-warning");

    send_Btn.addEventListener("click", modifyInfo);

}