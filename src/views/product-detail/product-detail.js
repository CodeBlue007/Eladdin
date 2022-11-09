import * as Api from "../api.js";
import {getLocal} from "./util/util.js";
import {renderData} from "./component/renderData.js";
import {addEvent} from "./component/addEvent.js";


async function fetchByISBN() {
  const ISBN = getLocal("ISBN");
  const data = await Api.get(`https://eladin-lgurfdxfjq-du.a.run.app/api/books/${ISBN}`);
  console.log(data);
  return data;
}



async function App() {
  try {
    const bookData = await fetchByISBN();
    renderData(bookData);
    addEvent(bookData);
  } catch (err) {
    console.log(err);
  }
}

App();




