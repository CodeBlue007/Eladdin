import * as Api from "../api.js";
import {getLocal ,setLocal} from "./util/util.js";

async function fetchByISBN() {
  const ISBN = getLocal("ISBN");
  const data = await Api.get(`https://eladin-lgurfdxfjq-du.a.run.app/api/books/${ISBN}`);
  return data;
}



async function App() {
  try {
    const bookData = await fetchByISBN();
    renderData(cartData);
    addEvent(cartData);
  } catch (err) {
    console.log(err);
  }
}

App();




