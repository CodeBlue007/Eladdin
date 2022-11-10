import { addEvents } from "./components/addEvents.js";
import { renderData } from "./components/renderData.js";
import {fetchBooks, fetchCategory} from "./components/fetchFn.js"
import { categoryRender } from "./components/categoryRender.js";


async function App() {
    try {
        const [books, categories] = await Promise.all([fetchBooks(),fetchCategory()]);

        console.log("books",books);
        console.log("categories",categories);
        categoryRender(categories);
        renderData(books);
        addEvents();

    } catch (err) {
        console.log(err);
    }
}


App();
