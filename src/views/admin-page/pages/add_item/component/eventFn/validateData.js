export function validateData(infoArray) {
    
    const [title, select, author, publish,
        publishDate,price,ebookTrue, description ,file]= infoArray;

    const publishRegex = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;

    for(let i=0; i<infoArray.length;i++){
        const val = infoArray[i];
        if(!val){
            alert("입력값을 확인해주세요");
            return false;
        }
    }

    if(!publishRegex.test(publishDate)) {
        alert("출판일자가 형식에 맞지 않습니다.");
        return false;
    }
    
    return true;
}