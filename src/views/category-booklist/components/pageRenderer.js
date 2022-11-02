import { addCommas } from "../../useful-functions.js"
import { addEvents } from "./eventListeners.js";
import { } from "./util/pagination.js"

function getItems(datas) {

    return datas?.map(data => {
        const { imgUrl, title, author, price, ISBN } = data;

        return `<!-- 카테고리명 container -->
        <div class="essay-category-container">
            <div class="box" id="essayBooks">
                <p class="title is-5 has-text-info">에세이(${N}권)</p>
            </div>
        </div>

        <!-- 카테고리별 bookList container -->
        <div class="essay-bookList-container">
            <div class="box" id="book">
                <div id="bookBox">
                    <div class="field">
                        <img src="../bookcoverEx.jpeg" alt="bookcover" width="200">
                    </div>
                    <div class="box" id="bookInfo">
                        <div id="mainBookField">
                            <div class="field" id="bookName">
                                <p>아버지의 해방일지</p>
                            </div>
                            <div class="field infoValue">
                                <p>"죽음에서 시작하는 삶의 이야기"</p>
                            </div>
                        </div>

                        <div id="author_publishField">
                            <div class="field" id="authorValue">
                                <p>정지아</p>
                            </div>
                            <div class="field infoValue" id="publisherValue">
                                <p>창비</p>
                            </div>
                            <div class="field infoValue" id="publicationDateValue">
                                <p>2022-06-10</p>
                            </div>
                        </div>
                        <div class="field" id="bookPrice">
                            <p>15,000원</p>
                        </div>
                        <div id="isEbookField">
                            <div class="field">
                                <p>eBook</p>
                            </div>
                            <div class="field infoValue">
                                <p>true</p>
                            </div>
                        </div>
                        <!-- <span class="icon">
                        <i class="fa-solid fa-arrow-right"></i>
                    </span> -->
                        <!-- <div class="field">
                        <li>(판매가)13,500원</li>
                    </div> -->
                    </div>
                    <div id="cartButton">
                        <button class="button is-info is-fullwidth" id="submitCartButton">
                            장바구니
                        </button>
                    </div>
                </div>
            </div>
        </div>`
    }).join('');
}

export function renderData(datas = []) {
    const itemContainer = document.querySelector(".item-container");
    const dataString = getItems(datas);
    itemContainer.innerHTML = dataString;
    addEvents();
}

