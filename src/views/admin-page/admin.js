import { addEvents } from "./component/addEvent.js";
import { orderRender } from "./component/orderRender.js";
import {productRender} from "./component/productRender.js";

async function fetchData() {
    const res = await fetch('../../db/mockBooks_1.json');
    const data = await res.json();
    console.log(data);
    return data;
  }
  

async function admin(){
    try{
        const datas = await fetchData();
        orderRender(datas);
        productRender(datas);
        addEvents();

    }catch(err){
        console.log(err);
    }

}

admin();