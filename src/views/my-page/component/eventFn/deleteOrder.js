import * as Api from "../../../api.js";


export async function deleteOrder(e){

    const {id:orderId, shippingStatus} = e.target.dataset;

    const item_container = document.getElementById(orderId);
    const order_container = document.querySelector(".order-products")

    if (shippingStatus !== "배송준비중") {
        alert('배송준비중 일 때에만 취소가 가능합니다!');
      } 
      
    if(!window.confirm("정말 주문을 취소하시겠어요? 취소이후엔 복구 할 수 없습니다.")) return;

    await Api.delete(`https://eladin-lgurfdxfjq-du.a.run.app/api/order/${orderId}`)

    alert('취소되었습니다!');
    item_container.remove();
    order_container.classList.add("hidden");

}