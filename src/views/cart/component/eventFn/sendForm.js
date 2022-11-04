import { isValidInfo } from "./sendFormFn/isValidInfo.js";
import { makeForm } from "./sendFormFn/makeForm.js";


export async function sendForm(event){

    event.preventDefault();

    const nameInput = document.querySelector(".input.is-success.name");
    const phoneInput = document.querySelector(".input.is-success.phone");
    const addressInput = document.querySelector(".input.is-success.address");

    const infoArray = [nameInput, phoneInput, addressInput].map(data=>data.value);

    if(!isValidInfo(infoArray)) return;

    const formData = makeForm(infoArray);



}



