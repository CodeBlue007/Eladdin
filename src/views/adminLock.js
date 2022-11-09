import * as Api from "./api.js";

function adminLock(){
  const adminPage_btn=document.querySelector('#adminPage_btn');
  adminPage_btn.addEventListener('click', verifyRole);
}

adminLock();

async function verifyRole() {
  const token = sessionStorage.getItem('token');
  const data = await Api.get('https://eladin-lgurfdxfjq-du.a.run.app/api/auth/my');
  console.log('userInfo', data);

  if (!token || data.role=="basic-user") {
    alert('관리자 계정으로 로그인 해주세요.');
    window.location.href="../login/login.html";
    return;
  } else {
  window.location.href="../admin-page/admin-page.html";
  }
}

