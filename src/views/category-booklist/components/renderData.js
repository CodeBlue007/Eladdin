import { addCommas } from "../../useful-functions.js";


function addItems(datas) {

  return datas.map(data => {

    const { imgUrl, title, author, price, description, category, ISBN } = data;
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
                    <div id="title">${title}</div>
                    <div id="author">${author}</div>
                    <div id="desc">"${description}"</div>
                    <div id="price">${newPrice}원</div>
                </div>
              </div>
            </article>
            <div class="show_detail">
                <button class="button" data-id=${ISBN}>상세정보 보기</button>
            </div>
          </div>
    </div>`
  }).join('');
}

export function renderData(datas, categories) {
  const bookContainer = document.querySelector(".book_container");

  const dataString = addItems(datas);
  bookContainer.innerHTML = dataString;

  const itemList = document.querySelectorAll(".itemcontainer");

  [...itemList].forEach(item => {
    const category = item.dataset.category;
    if (category === categories[0].title) {
      item.classList.remove("hidden");
    }
    else {
      item.classList.add("hidden");
    }
  })


}
