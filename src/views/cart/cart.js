import { setLocal, getLocal } from "./util/util.js"
import { renderData } from "./component/renderData.js"



function App() {
    const key = "bookInfo";
    const data = getLocal(key);
    renderData(data);
}

App();
