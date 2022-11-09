const login_btn=document.querySelector('#login_btn');

function logoutBtn(){
  const token=sessionStorage.getItem('token');
  if(!token){
    login_btn.textContent='Log out'
  }
  console.log(login_btn.textContent);
}

logoutBtn();
