import * as Api from "../../api.js";

export async function fetchData() {
    const res = await fetch('../../db/mockBooks_1.json');
    const data = await res.json();
    return data;
  }


  export function fetchBooks() {
    return Api.get('https://eladin-lgurfdxfjq-du.a.run.app/api/books');
    
  }


export function fetchOrders() {
    return Api.get("https://eladin-lgurfdxfjq-du.a.run.app/api/order/");    
}


export function fetchCategory() {
    return Api.get("https://eladin-lgurfdxfjq-du.a.run.app/api/category");
}
