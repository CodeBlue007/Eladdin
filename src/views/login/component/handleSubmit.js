import { validateData } from "./validateData.js";
import * as Api from "../../api.js";


export async function handleSubmit(event) {

    event.preventDefault();
    const emailInput = document.querySelector("#emailInput");
    const passwordInput = document.querySelector("#passwordInput");

    const infoArray = [emailInput.value, passwordInput.value];

    if (!validateData(infoArray)) return;

    const [email, password] = infoArray;

    try {
        const data = { email, password };

        const result = await Api.post("https://eladin-lgurfdxfjq-du.a.run.app/api/auth/login", data);
        const token = result.token;

        // 로그인 성공, 토큰을 세션 스토리지에 저장
        // 물론 다른 스토리지여도 됨
        sessionStorage.setItem("token", token);

        alert(`정상적으로 로그인되었습니다.`);

        // 로그인 성공

        // 기본 페이지로 이동
        window.location.href = "../home/home.html";
    } catch (err) {
        console.error(err.stack);
        alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
    }
}