import { validateData } from "./validateData.js";

async function post(endpoint, data) {
    const apiUrl = endpoint;
    // JSON.stringify 함수: Javascript 객체를 JSON 형태로 변환함.
    // 예시: {name: "Kim"} => {"name": "Kim"}
    const bodyData = JSON.stringify(data);
    console.log(`%cPOST 요청: ${apiUrl}`, 'color: #296aba;');
    console.log(`%cPOST 요청 데이터: ${bodyData}`, 'color: #296aba;');
  
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
      body: bodyData,
    });
  
    // 응답 코드가 4XX 계열일 때 (400, 403 등)
    if (!res.ok) {
      const errorContent = await res.json();
      const { reason } = errorContent;
  
      throw new Error(reason);
    }
  
    const result = await res?.json();
  
    return result;
  }

export async function handleSubmit(event) {

    event.preventDefault();
    const emailInput = document.querySelector("#emailInput");
    const passwordInput = document.querySelector("#passwordInput");

    const infoArray = [emailInput.value, passwordInput.value];

    if (!validateData(infoArray)) return;

    const [email, password] = infoArray;

    try {
        const data = { email, password };

        const result = await post("https://eladin-lgurfdxfjq-du.a.run.app/api/auth/login", data);
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