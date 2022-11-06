import { handleSubmit } from "./handleSubmit.js";

export function addEvents() {
    const submitButton = document.querySelector("#submitButton");
    submitButton.addEventListener("click", handleSubmit);

}