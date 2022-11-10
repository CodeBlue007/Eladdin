import * as Api from "../../../../api.js";
import { validateData } from "./validateData.js";
// import bcrypt from "bcryptjs";


export async function registerForm(event) {

  event.preventDefault();

  const nameInput = document.querySelector(".input.is-link.is-light.name");
  const phoneInput = document.querySelector(".input.is-link.is-light.phone");
  const postalCodeInput = document.querySelector(".input.is-link.is-light.post_code");
  const addressInput = document.querySelector(".input.is-link.is-light.address");
  const add_detailInput = document.querySelector(".input.is-link.is-light.add_detail");
  const curPwInput = document.querySelector(".input.is-link.is-light.cur_password");
  const passInput = document.querySelector(".input.is-link.is-light.password");
  const passConfirmInput = document.querySelector(".input.is-link.is-light.pass_confirm");


  const infoArray
    = [nameInput, phoneInput, postalCodeInput, addressInput, add_detailInput, curPwInput, passInput, passConfirmInput]
      .map(input => input.value);

  if (!validateData(infoArray)) return;

  const [userName, phone, postalCode, address, add_detail, curPw , password, passConfirm]
    = infoArray;

  console.log("검증완료");

  try {

    const data = {
      "fullName": userName,
      password,
      currentPassword : curPw,
      "address": {
        "postalCode": postalCode,
        "address1": address,
        "address2": add_detail,
      },
      phoneNumber : phone,
      "role": "basic-user"
    }


    await Api.patch(`https://eladin-lgurfdxfjq-du.a.run.app/api/auth/my`,'', data);

    alert(`정상적으로 유저정보를 수정했습니다.`);

    // // 로그인 페이지 이동
    window.location.href = "../myPage.html";
  } catch (err) {
    console.error(err.stack);
    alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
  }

}