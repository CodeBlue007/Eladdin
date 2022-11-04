import { addCommas } from "../../useful-functions.js";

export function renderOrder(datas){

return datas?.map(data => {

  if(!data.checked) return '';

    const { imgUrl, title, author, price, ISBN ,volume} = data;
    const totalPrice = parseInt(price) * parseInt(volume);
    const newPrice = addCommas(totalPrice); 

    return ` <div class="orderItem">
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img src=${imgUrl} alt="Image" />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>${title}</strong>
              <br/>
              <small>${author}</small>
              <div>수량 : ${volume}</div>
              <div>상품가격 : ${newPrice}</div>
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>`
  }).join('');
}