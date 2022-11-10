import * as Api from "../../../api.js";


export async function deleteUser(){

    if(!window.confirm("정말 회원을 탈퇴하시겠습니까? 탈퇴이후에는 복구할 수 없습니다."))
    return;

    try {
        await Api.delete("https://eladin-lgurfdxfjq-du.a.run.app/api/auth/my");

        alert(`회원을 탈퇴하셨습니다.`);
        sessionStorage.removeItem("token");

        // 기본 페이지로 이동
        window.location.href = "../home/home.html";
    } catch (err) {
        console.error(err.stack);
        alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
    }
}