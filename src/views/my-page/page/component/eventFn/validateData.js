import { validateEmail } from "../../../useful-functions.js";

export function validateData(infoArray) {
    
    const [userName, phone, postCode, address,add_detail,email, password, passConfirm]
        = infoArray;

    console.log(infoArray);
    const phoneRegex = /\d{2,3}-\d{3,4}-\d{3,4}/;
    const nameRegex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z]+$/;
    const addressRegex = /[~!@#$%^&*()_+|<>?:{}]/;

    if (!userName) {
        alert("이름을 입력해주세요.");
        return false;
    }
    else if (!phone) {
        alert("연락처를 입력해주세요.");
        return false;
    }
    else if (!address) {
        alert("주소를 입력해주세요.");
        return false;
    }
    else if (!email) {
        alert("이메일을 입력해주세요.");
        return false;
    }
    else if (!password) {
        alert("비밀번호를 입력해주세요.");
        return false;
    }
    else if(!passConfirm){
        alert("비밀번호를 한번 더 입력해주세요.");
        return false;
    }
    else if (!nameRegex.test(userName)) {
        alert("이름에 숫자 혹은 특수문자가 포함되었습니다.");
        return false;
    }
    else if (!phoneRegex.test(phone)) {
        alert("전화번호가 유효한 형식이 아닙니다");
        return false;
    }
    else if (addressRegex.test(address)) {
        alert("주소에 특수문자가 포함되어 있습니다.");
        return false;
    }
    else if(!validateEmail(email)){
        alert("유효한 이메일 형식이 아닙니다.");
        return false;
    }
    else if(password.length <8){
        alert("입력하신 비밀번호가 8자리보다 작습니다.")
        return false;
    }
    else if(password !== passConfirm){
        alert("입력하신 비밀번호가 다릅니다.");
        return false;
    }
    else return true;
}