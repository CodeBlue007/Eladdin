import { registerForm } from "./eventFn/registerForm.js";
import { changeFileName } from "./eventFn/changeFileName.js";

export function addEvents() {
    const sendBtn = document.querySelector(".button.is-black");
    const fileInput = document.querySelector("#file");

    sendBtn.addEventListener("click", registerForm);
    fileInput.addEventListener("change", changeFileName);

}