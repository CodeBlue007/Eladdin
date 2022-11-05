import { renderCategoryData } from "./components/mainPageRenderer.js"
import { addEventListeners } from "./components/eventListeners.js";

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
        renderCategoryData(data); // 여기서 실행되지 않고 각 카테고리 클릭 시 실행하려고 함.
    } catch (err) {
        console.log(err);
    }
}

App();