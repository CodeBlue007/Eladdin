import { check } from "prettier";
import { getLocal, setLocal } from "../util/util.js";


function sendData(bookData){
  console.log(bookData);
  const key ="bookInfo";
  const local = getLocal(key);
  const filtered = local.filter(data => data._id === bookData._id);
  if(filtered.length > 0){
    alert('이미 장바구니에 담긴 상품입니다');
  }
  else{
  local.push(bookData);
  }

  return local;
}

function updateLocal(local){
  const localUp= local.map(data => ({...data, 'checked':true, 'volume': 1}))
}



export function addEvent(bookData) {
  const cart_btn = document.querySelector('.cart');
  cart_btn.addEventListener('click',()=>sendData(bookData));
}
