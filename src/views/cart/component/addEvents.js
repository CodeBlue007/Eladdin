import { deleteAll ,deleteOne } from "./deleteFn.js";
import { plusItem , minusItem} from "./modifyItems.js";

export function addEvents(){
    const deleteAllBtn = document.querySelector('#deleteall_btn');
    const deleteEach = document.querySelectorAll('.delete_btn');
    const plusBtn = document.querySelectorAll(".plus_btn");
    const minusBtn = document.querySelectorAll(".minus_btn");


    deleteAllBtn.addEventListener("click", deleteAll);
    
    [...deleteEach].forEach(button =>{
        button.addEventListener("click", deleteOne);
    });

    [...plusBtn].forEach(button =>{
        button.addEventListener("click", plusItem)
    });

    [...minusBtn].forEach(button =>{
        button.addEventListener("click", minusItem)
    }); //어 이거 버블링, 캡처링해서 컨테이너에 넣는건가?
  //상위 container에 모든 이벤트를 등록 > target값이 아니면 예외처리?
  
}

