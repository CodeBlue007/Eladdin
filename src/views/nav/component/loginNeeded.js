


export function loginNeeded(){
 const token = sessionStorage.getItem('token');

  if (!token) {
    alert('로그인이 필요한 서비스입니다');
    window.location.href="../login/login.html";
    return;
  } else {
  window.location.href="../my-page/myPage.html";
  }
}

