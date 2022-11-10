import { registerForm } from "./eventFn/registerForm.js";
import {makeAddress} from "./eventFn/makeAddress.js";

export function addEvents(){
    const submitBtn = document.querySelector("#submitButton");
    const addressBtn = document.querySelector("#addressButton");



    addressBtn.addEventListener("click", makeAddress);
    submitBtn.addEventListener("click", registerForm);
}