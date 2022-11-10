import * as Api from "../../../api.js";


export async function checkPw(){

    const passwordInput = document.getElementById("passwordInput");
    const password = passwordInput.value;
    const email = JSON.parse(localStorage.getItem("email"));

    try {
        const data = { email, password };

        await Api.post("https://eladin-lgurfdxfjq-du.a.run.app/api/auth/login", data);

        alert(`회원정보수정 페이지로 이동합니다.`);

        // 기본 페이지로 이동
        window.location.href = "./page/userInfo.html";
    } catch (err) {
        console.error(err.stack);
        alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
    }
}