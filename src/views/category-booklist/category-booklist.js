import { addEvents } from "./components/addEvents.js";
import { renderData } from "./components/renderData.js";



async function fetchData() {
    const res = await fetch('../../db/mockBooks_1.json'); // ${하위 카테고리}.html에서 접근 시 ../../../
    const data = await res.json();
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
