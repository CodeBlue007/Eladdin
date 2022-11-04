function isValidInfo(infoArray){
    const [userName, phoneNumber, address]  = infoArray;
    const phoneRegex = /\d{2,3}-\d{3,4}-\d{3,4}/;
    const nameRegex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z]+$/;
    const addressRegex = /[~!@#$%^&*()_+|<>?:{}]/; 

    if(!userName){
        alert("수령자 이름을 입력해주세요.");
        return false;
    }
    else if(!phoneNumber){
        alert("연락처를 입력해주세요.");
        return false;
    }
    else if(!address){
        alert("주소를 입력해주세요.");
        return false;
    }
    else if(!nameRegex.test(userName)){
        alert("수령자 이름에 숫자 혹은 특수문자가 포함되었습니다.");
        return false;
    }
    else if(!phoneRegex.test(phoneNumber)){
        alert("전화번호가 유효한 형식이 아닙니다");
        return false;
    } 
    else if(addressRegex.test(address)){
        alert("주소에 특수문자가 포함되어 있습니다.");
        return false;
    }
    else return true;
}



export async function sendForm(event){

    event.preventDefault();

    const nameInput = document.querySelector(".input.is-success.name");
    const phoneInput = document.querySelector(".input.is-success.phone");
    const addressInput = document.querySelector(".input.is-success.address");

    const infoArray = [nameInput, phoneInput, addressInput].map(data=>data.value);

    console.log(infoArray);

    if(!isValidInfo(infoArray)) return;




}



