import * as Api from "../../api.js";

export async function fetchData() {
    const res = await fetch('../../db/mockBooks_1.json');
    const data = await res.json();
    return data;
  }


  export async function fetchBooks() {
    const data = await Api.get('https://eladin-lgurfdxfjq-du.a.run.app/api/books');
    console.log("books",data);
    return data.slice(0,17);
  }




export async function fetchOrders() {
    const orders = await Api.get("https://eladin-lgurfdxfjq-du.a.run.app/api/order/");    
    console.log("orders",orders);
    return orders;
}


export async function fetchCategory() {
    const categories = await Api.get("https://eladin-lgurfdxfjq-du.a.run.app/api/category");
    console.log("categories", categories);
    return categories;
}
