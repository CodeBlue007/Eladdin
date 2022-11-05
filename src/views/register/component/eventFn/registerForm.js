import * as Api from "../../../api.js";
import { validateData } from "./validateData.js";

export async function registerForm(event) {

  event.preventDefault();
  const nameInput = document.querySelector(".input.is-success.name");
  const phoneInput = document.querySelector(".input.is-success.phone");
  const postCodeInput = document.querySelector(".input.is-success.post_code");
  const addressInput = document.querySelector(".input.is-success.address");
  const add_detailInput = document.querySelector(".input.is-success.add_detail");
  const emailInput = document.querySelector(".input.is-success.email");
  const passInput = document.querySelector(".input.is-success.password");
  const passConfirmInput = document.querySelector(".input.is-success.pass_confirm");


  const infoArray
    = [nameInput, phoneInput, postCodeInput, addressInput, add_detailInput, emailInput, passInput, passConfirmInput]
    .map(input => input.value);

  if (!validateData(infoArray)) return;

  const [userName, phone, postCode, address, add_detail, email, password, passConfirm]
   = infoArray;

  console.log("검증완료");

  try {
    const data = { 
      email,
      "fullName" : userName,
      password,
      phoneNumber : phone,
      "address" :{
        "postalCode" : postCode,
        "address1" : address,
        "address2" : add_detail,
      }
    }


    await Api.post("https://eladin-lgurfdxfjq-du.a.run.app/api/auth/register"
    , data);

    alert(`정상적으로 회원가입되었습니다.`);

    // // 로그인 페이지 이동
    window.location.href = "/src/views/login/login.html";
  } catch (err) {
    console.error(err.stack);
    alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
  }

}