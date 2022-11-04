import { renderBookData } from "./components/pageRenderer.js"
// import { renderTitleData } from "./components/categoryTitleRenderer.js"
import { addEventListeners } from "./components/eventListeners.js";

async function fetchData() {
    const res = await fetch('../../../db/mockBooks.json');
    const data = await res.json();
    const bookData = data.map(item => ({ ...item, volume: 1, checked: true }));
    return bookData;
}

async function App() {
    try {
        const data = await fetchData();
        // renderTitleData(data);
        renderBookData(data);
        addEventListeners();
    } catch (err) {
        console.log(err);
    }
}

App();