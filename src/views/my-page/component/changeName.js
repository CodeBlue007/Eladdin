import * as Api from "../../../views/api.js";

const nameArea=document.querySelector('.greeting');

async function changeName() {


  try{  
    const data = await Api.get('https://eladin-lgurfdxfjq-du.a.run.app/api/auth/my');
    console.log("userInfo",data);
    nameArea.innerHTML+=`${data.fullName} 님!`;
    } catch (err) {
    console.error(err.stack);
    alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
  }
}

changeName();


