import { getLocal } from "../../util/util.js";
import {renderOrder} from "../renderOrder.js";


export function makeOrder(){
    const orderPage = document.querySelector(".orderpage");
    const orderBar = document.querySelector(".orderbar");
    const orderContainer = document.querySelector(".orderItem_container");
    const local = getLocal("bookInfo");
    const dataString = renderOrder(local);    
    orderContainer.innerHTML = dataString;
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


