import { setLocal, getLocal } from "./util/util.js"
import { renderData } from "./component/renderData.js"
import {addEvents} from "./component/addEvents.js";



function App() {
    const key = "bookInfo";
    const data = getLocal(key);
    renderData(data);
    addEvents();
}

App();
