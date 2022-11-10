import { renderOrder } from "./renderOrder.js";
import {fetchOrder, fetchUser} from "./fetchFn.js";
import {addEvent} from "./component/addEvent.js"; 

function changeName(userInfo) {
    const nameArea=document.querySelector('.greeting');
    nameArea.innerHTML =`${userInfo.fullName} 님!`;
}


async function myPage() {
    try {
        const [orderList, userInfo] = await Promise.all([fetchOrder(), fetchUser()]);
        
        localStorage.setItem("email", JSON.stringify(userInfo.email));
        
        changeName(userInfo);
        renderOrder(orderList);
        addEvent();
    }

    catch (err) {
        console.error(err.stack);
        alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
    }
}

myPage();