import { renderHTML } from "./components/pageRenderer.js"
import { addEventListeners } from "./components/eventListeners.js";

async function fetchData() {
    const res = await fetch("../../db/mockBooks.js");
    const data = await res.json();
    const slicedData = data.map(item => ({ ...item, volume: 1, checked: true }));
    console.log(slicedData);
}

async function App() {
    try {
        const data = await fetchData();
        renderHTML(data);
        addEventListeners();
    } catch (err) {
        console.log(err);
    }
}

App();