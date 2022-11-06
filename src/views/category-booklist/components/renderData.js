import { addCommas } from "../../useful-functions.js";


function addItems(datas) {

    return datas.map(data => {

        const { imgUrl, title, author, price, description, category } = data;
        const newPrice = addCommas(price);

        return ` <div class="itemcontainer" data-category=${category}>
        <div class="box">
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img src=${imgUrl} alt="Image" />
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                    <div>${title}</div>
                    <div>${author}</div>
                    <div>${description}</div>
                    <div>${newPrice}</div>
                    <div>${category}</div>
                </div>
              </div>
            </article>
          </div>
    </div>`
    }).join('');
}

export function renderData(datas) {
    const bookContainer = document.querySelector(".book_container");

    const dataString = addItems(datas);
    bookContainer.innerHTML = dataString;

    const itemList = document.querySelectorAll(".itemcontainer");

    [...itemList].forEach(item => {
        const category = item.dataset.category;
        if (category === "에세이") {
            item.classList.remove("hidden");
        }
        else {
            item.classList.add("hidden");
        }
    })


}