import { verifyRole } from "./component/adminLock.js";
import { loginNeeded } from "./component/loginNeeded.js";


function logout() {
    sessionStorage.removeItem('token');
    alert('로그아웃 되었습니다.');
  }
  


export function addEvent(){

    const login_btn=document.querySelector('#login_btn') || undefined;
    const myPage_btn=document.querySelector('#myPage_btn') || undefined;
    const adminPage_btn=document.querySelector('#adminPage_btn') || undefined;
    
    const token=sessionStorage.getItem('token');
    
    
    if(token){
      login_btn && (login_btn.textContent ='로그아웃');
      login_btn && (login_btn.addEventListener('click', logout));
    }

    adminPage_btn && (adminPage_btn.addEventListener('click', verifyRole));
    myPage_btn && (myPage_btn.addEventListener('click', loginNeeded));
} 