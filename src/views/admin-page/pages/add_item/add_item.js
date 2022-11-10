import { addEvents } from "./component/addEvent.js";
import { categoryRender } from "./component/categoryRender.js";

function addItems(){
    categoryRender();
    addEvents();
}

addItems();