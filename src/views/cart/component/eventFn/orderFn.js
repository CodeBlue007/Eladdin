export function makeOrder(){
    const orderPage = document.querySelector(".orderpage");
    const orderBar = document.querySelector(".orderbar");

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