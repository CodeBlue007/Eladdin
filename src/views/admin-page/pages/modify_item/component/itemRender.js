import * as Api from "../../../../api.js";



async function fetchItemInfo() {
    const ISBN = JSON.parse(localStorage.getItem("ISBN"));
    const bookInfo = await Api.get(`https://eladin-lgurfdxfjq-du.a.run.app/api/books/${ISBN}`, '');
    console.log(bookInfo);
    return bookInfo;
}


export async function renderInfo() {
    const bookInfo = await fetchItemInfo();
    
    const { title, author: authorArr, category, description, price, publicationDate, publisher, EBook } = bookInfo;
    const author = authorArr[0];
    const titleInput = document.querySelector("#title");
    const selectInput = document.querySelector("#category_select");
    const authorInput = document.querySelector("#author");
    const publishInput = document.querySelector("#publisher");
    const publishDateInput = document.querySelector("#publishDate");
    const priceInput = document.querySelector("#price");
    const descriptionInput = document.querySelector("#description");
    const Ebooktrue = document.querySelector("#Ebooktrue");
    const Ebookfalse = document.querySelector("#Ebookfalse");

    titleInput.value = title;
    selectInput.value = category;
    authorInput.value = author;
    publishInput.value = publisher;
    publishDateInput.value = publicationDate.slice(0,10);
    descriptionInput.value = description;
    priceInput.value = price;

    if(EBook){
        Ebooktrue.checked = true;
    }
    else{
        Ebookfalse.checked = true;
    }
}