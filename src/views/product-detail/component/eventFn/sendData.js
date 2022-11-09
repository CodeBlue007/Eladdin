import { getLocal, setLocal } from "../../util/util.js";

const key ="bookInfo";

function updateLocal(local){
    const localUpdate = local.map(data =>({...data, 'checked':true, 'volume': 1}));
    setLocal(key, localUpdate);
}

export function sendData(bookData){
  const modal = document.querySelector(".modal");

  const local = getLocal(key);
  const filtered = local?.filter(data => data._id === bookData._id);
  if(filtered.length > 0){
    alert('이미 장바구니에 담긴 상품입니다');
  }
  else{
  local.push(bookData);
  }

  modal.classList.add("is-active");

  return updateLocal(local);
}