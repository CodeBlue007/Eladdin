import * as Api from "../api.js";

export async function fetchOrder() {
  return await Api.get("https://eladin-lgurfdxfjq-du.a.run.app/api/order/my");
}

export async function fetchUser(){
    return await Api.get('https://eladin-lgurfdxfjq-du.a.run.app/api/auth/my');
}