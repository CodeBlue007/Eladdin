import { validateEmail } from "../../useful-functions.js";


export function validateData(infoArray) {
    const [email, password] = infoArray;

    if (!validateEmail(email)) {
        alert("이메일 형식이 아닙니다.");
        return false;
    }
    else if (password.length < 8) {
        alert("비밀번호가 8자리보다 짧습니다.");
        return false;
    }
    else return true;
}