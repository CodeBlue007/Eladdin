import { addEvents } from "./component/addEvent.js";
import { orderRender } from "./component/orderRender.js";
import { categoryRender } from "./component/categoryRender.js";
import {productRender} from "./component/productRender.js";
import { fetchData,fetchOrders, fetchCategory } from "./component/fetchFn.js";

  
  

async function admin(){

    try{
        const datas = await fetchData();
        // const orders = await fetchOrders();
        const categories = await fetchCategory();

        orderRender(datas);
        productRender(datas);
        categoryRender(categories);
        addEvents();

    }catch(err){
        console.log(err);
    }

}

admin();