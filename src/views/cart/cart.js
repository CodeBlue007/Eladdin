import { setLocal, getLocal } from "./util/util.js"
import { renderData } from "./component/renderData.js"
import {addEvents} from "./component/addEvents.js";

async function fetchData() {
  const res = await fetch("../../db/mockBooks.json");
  const data = await res.json();
  const slicedData = data.slice(0,10).map(item => ({...item, volume:1, checked:true}));
  console.log(slicedData);
  setLocal(slicedData);
  return "bookInfo";
}


async function App() {

  try{

    const key = await fetchData();
    const data = await getLocal(key);
    renderData(data);
    addEvents();

  }catch(err){
    console.log(err);
  }
}

App();
