import { addEventListeners } from "./components/eventListeners.js";
import { renderCategoryData } from "./components/mainPageRenderer.js";

async function fetchData() {
    const res = await fetch('../../db/mockBooks_1.json'); // ${하위 카테고리}.html에서 접근 시 ../../../
    const data = await res.json();
    const bookData = data.map(item => ({ ...item, volume: 1, checked: true }));
    return bookData;
}

async function App() {
    try {
        const data = await fetchData();
        addEventListeners(data);
        renderCategoryData(data);
    } catch (err) {
        console.log(err);
    }
}

App();