import { getLocal, getTotalPrice } from "../../util/util.js";
import {renderOrder} from "../renderOrder.js";


export function makeOrder(){

    if(!sessionStorage.getItem("token")){
        alert("로그인한 사용자만 사용가능합니다.");
        return;
    }

    const orderPage = document.querySelector(".orderpage");
    const orderBar = document.querySelector(".orderbar");
    const orderContainer = document.querySelector(".orderItem_container");
    const orderPrice = document.querySelector(".order_result_container .box");
    


    const local = getLocal("bookInfo");
    const dataString = renderOrder(local);
    const totalPrice = getTotalPrice(local);

    orderContainer.innerHTML = dataString;
    orderPrice.innerText = `총가격 : ${totalPrice}`;
    orderPage.classList.remove("hidden");
    orderBar.classList.add("hidden");
}


export function modifyOrder(event){
    event.preventDefault();
    const orderPage = document.querySelector(".orderpage");
    const orderBar = document.querySelector(".orderbar");

    orderPage.classList.add("hidden");
    orderBar.classList.remove("hidden");
}


