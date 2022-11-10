import * as Api from "../../api.js";
import {openModal} from "./openModal.js";

async function fetchUserInfo() {
    const userInfo = await Api.get(
      "https://eladin-lgurfdxfjq-du.a.run.app/api/auth/my",
    );
    console.log("subin", userInfo);
    return userInfo;
  }


async function userInfo(){
    const userInfo = await fetchUserInfo();
    const userInfobtn = document.querySelector("#userInfo_btn");

    userInfobtn.addEventListener("click",()=> openModal(userInfo));

}

userInfo();