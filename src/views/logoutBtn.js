const login_btn=document.querySelector('#login_btn');

async function logout() {
  sessionStorage.removeItem('token');
  alert('로그아웃 되었습니다.');
}

function logoutBtn(){
  const token=sessionStorage.getItem('token');
  if(token){
    login_btn.textContent='로그아웃';
    login_btn.addEventListener('click', logout);
  }
}

logoutBtn();
