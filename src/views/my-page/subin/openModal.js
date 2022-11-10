import bcrypt from 'bcrypt';

export async function openModal(userInfo){

    const modal = document.querySelector(".modal");

    modal.classList.add("is-active");

    const confirmBtn = document.querySelector(".confirm-btn");
    const deleteBtn = document.querySelector(".modal-close");

    deleteBtn.addEventListener("click" , ()=>{
        modal.classList.remove("is-active");
    });

    confirmBtn.addEventListener("click",()=>moveToUserPage(userInfo));
}

async function moveToUserPage(userInfo){

    const {password : hashedPw} = userInfo;
    const passwordInput = document.querySelector("#passwordInput");
    const enterPw = passwordInput.value;

    const isPasswordCorrect = await bcrypt.compare(
        enterPw,
        hashedPw
      );

      if(!isPasswordCorrect){
        alert("현재 비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요.");
        return;
      }
      else{
        window.location.href = "../page/userInfo.html";
      }
  
}