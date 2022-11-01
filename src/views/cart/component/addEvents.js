import { deleteAll ,deleteOne } from "./deleteFn.js";

export function addEvents(){
    const deleteAllBtn = document.querySelector('#deleteall_btn');
    const deleteEach = document.querySelectorAll('.delete_btn');


    deleteAllBtn.addEventListener("click", deleteAll);
    
    [...deleteEach].forEach(button =>{
        button.addEventListener("click", deleteOne);
    })
  
}

