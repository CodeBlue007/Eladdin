import * as Api from "../../../api.js";

async function fetchUserInfo() {
    const userInfo = await Api.get(
        "https://eladin-lgurfdxfjq-du.a.run.app/api/auth/my",
    );
    console.log("subin", userInfo);
    return userInfo;
}



export async function renderUser(){

    const setLocal = (key, item) => localStorage.setItem(key, JSON.stringify(item)); 

    const userInfo = await fetchUserInfo();

    const nameInput = document.querySelector(".input.is-link.is-light.name");
    const phoneInput = document.querySelector(".input.is-link.is-light.phone");
    const postalCodeInput = document.querySelector(".input.is-link.is-light.post_code");
    const addressInput = document.querySelector(".input.is-link.is-light.address");
    const add_detailInput = document.querySelector(".input.is-link.is-light.add_detail");

    const {_id,address, fullName, phoneNumber, password} = userInfo;
    const {address1, address2, postalCode} = address;

    setLocal("userId", _id);
    setLocal("curPw", password);

    nameInput.value = fullName;
    phoneInput.value = phoneNumber;
    postalCodeInput.value = postalCode;
    addressInput.value = address1;
    add_detailInput.value = address2;

}