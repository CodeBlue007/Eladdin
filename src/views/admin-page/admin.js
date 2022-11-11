import { addEvents } from "./component/addEvent.js";
import { orderRender } from "./component/orderRender.js";
import { categoryRender } from "./component/categoryRender.js";
import {productRender} from "./component/productRender.js";
import { fetchOrders, fetchCategory,fetchBooks} from "./component/fetchFn.js";


async function admin(){

    try{
        const [books, orders, categories] = await Promise.all([fetchBooks(),fetchOrders(),fetchCategory()]);

        console.log("books", books);
        console.log("orders",orders);
        console.log("category",categories);

        orderRender(orders);
        productRender(books);
        categoryRender(categories);
        addEvents();

    }catch(err){
        console.log(err);
    }

}

admin();