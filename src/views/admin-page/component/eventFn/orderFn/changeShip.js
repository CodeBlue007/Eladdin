import * as Api from "../../../../api.js";


export async function changeShip(e){

    try{
        const {id} = e.target.dataset;

        const shippingMap = Object.freeze({
            "delivery_ready" : "배송준비중",
            "delivering" : "배송중",
            "delivered" : "배송완료",
        })
    
        const shippingStatus = shippingMap[e.target.value];
    
        const data = {shippingStatus};
        console.log(data);
    
        await Api.patch(`https://eladin-lgurfdxfjq-du.a.run.app/api/order/${id}`,"shippingStatus",data);



    }
    catch (err) {
        console.error(err.stack);
        alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
    }



    
}