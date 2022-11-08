import { addEvents } from "./components/addEvents.js";
import { renderData } from "./components/renderData.js";
import * as Api from "../../../api.js";



async function fetchData() {

    const data = await Api.get("https://eladin-lgurfdxfjq-du.a.run.app/api/books");
    console.log(data);
    return data;
}


async function App() {
    try {
        const data = await fetchData();
        renderData(data);
        addEvents();

    } catch (err) {
        console.log(err);
    }
}


App();
