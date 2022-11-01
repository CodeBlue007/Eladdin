import { setLocal,getLocal } from "./util/util.js"
import {renderData} from "./component/renderData.js"

async function fetchData() {
  const res = await fetch("../../db/mockBooks.json");
  const data = await res.json();
  setLocal(data);
  console.log(data);
  return "bookInfo";
}


function App(){
  fetchData()
  .then(key => getLocal(key))
  .then(data => renderData(data));
}

App();
