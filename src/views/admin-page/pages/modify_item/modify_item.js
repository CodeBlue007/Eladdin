import { addEvents } from "./component/addEvent.js";
import { categoryRender } from "./component/categoryRender.js";
import { renderInfo } from "./component/itemRender.js";



function modifyItem(){
    categoryRender();
    renderInfo();
    addEvents();
}

modifyItem();