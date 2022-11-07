import { registerForm } from "./eventFn/registerForm.js";
import {changeFile} from "./eventFn/changeFile.js";

export function addEvents() {
    const sendBtn = document.querySelector(".button.is-black");
    const fileInput = document.querySelector("#file");

    sendBtn.addEventListener("click", registerForm);
    fileInput.addEventListener("change", changeFile);

}