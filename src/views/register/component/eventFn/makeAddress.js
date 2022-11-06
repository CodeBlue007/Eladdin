export function makeAddress() {
    new daum.Postcode({
        oncomplete: function(data) {

            const postCode = document.querySelector(".input.is-success.post_code");
            const address = document.querySelector(".input.is-success.address");
            const add_detail = document.querySelector(".input.is-success.add_detail");

            console.log(postCode,add_detail,address);
            // 각 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            let addr = ''; // 주소 변수
            // let extraAddr = ''; // 참고항목 변수

            //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }
            
            postCode.value = data.zonecode;
            address.value = addr;
            // 커서를 상세주소 필드로 이동한다.
            add_detail.focus();
        }
    }).open();
}