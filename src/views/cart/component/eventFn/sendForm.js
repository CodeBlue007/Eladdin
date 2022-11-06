import {getLocal} from "../../util/util.js";
import * as Api from "../../../api.js";


export async function sendForm(event){

    try {

        event.preventDefault();
        const local = getLocal("bookInfo");
        const sendData = local?.filter(data => data.checked).map(checked=> ({            
            'ISBN' : checked.ISBN ,
            'volume' : checked.volume ,
        }));

        console.log(sendData);
    
       await Api.post("https://eladin-lgurfdxfjq-du.a.run.app/api/order/", sendData);

    
        alert(`주문이 정상적으로 처리되었습니다.`);
    
        // 주문완료 페이지 이동해야함
        window.location.href = "/login";
      } catch (err) {
        console.error(err.stack);
        alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
      }

}



