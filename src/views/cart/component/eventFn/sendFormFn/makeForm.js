import {getLocal, getFullDate} from "../../../util/util.js"

export function makeForm(infoArray){
    
    const [userName, phone, address] = infoArray;
    const local = getLocal("bookInfo");
    const nowDate = getFullDate();

    console.log(nowDate,local);
}