import * as Api from "../../../../api.js";


export async function deleteOrder(e) {

    try {
        const { id } = e.target.dataset;
        const container = document.getElementById(id);
        const data = [id];
        await Api.delete(`https://eladin-lgurfdxfjq-du.a.run.app/api/order/`, data);
        container.remove();
    }
    catch (err) {
        console.error(err.stack);
        alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
    }

}
