import * as Api from "../../api.js";



export async function verifyRole() {

  try {
    const token = sessionStorage.getItem('token');
    const data = await Api.get('https://eladin-lgurfdxfjq-du.a.run.app/api/auth/my');
    console.log('userInfo', data);

    if (!token || data.role == "basic-user") {
      alert('관리자 계정으로 로그인 해주세요.');
      window.location.href = "../login/login.html";
      return;
    } else {
      window.location.href = "../admin-page/admin-page.html";
    }
  } catch (err) {
    console.error(err.stack);
    alert(`${err.message}`);
  }

}

