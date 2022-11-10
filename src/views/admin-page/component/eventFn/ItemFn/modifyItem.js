
export function modifyItem(e){
    const {id} = e.target.dataset;
    localStorage.setItem("ISBN" , JSON.stringify(id));
    
    window.location.href = "./pages/modify_item/modify_item.html";

}