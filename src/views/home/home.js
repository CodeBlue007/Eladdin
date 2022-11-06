import * as Api from "../api.js";


async function getUserfromToken(){
  try {
    const result = await Api.get("https://eladin-lgurfdxfjq-du.a.run.app/api/auth/userlist");

    alert(`정상적으로 유저정보를 받아왔습니다.`);

    console.log(result);

  } catch (err) {
    console.error(err.stack);
    alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
  }
}

getUserfromToken();