export function setLocal(data = {}) {
  localStorage.setItem("bookInfo", JSON.stringify(data));
}

export function getLocal(key) {

  const localDatas = localStorage.getItem(key);

  return localDatas ? JSON.parse(localDatas) : [];
}

export function getTotalPrice(datas) {
  const totalPrice = datas ? datas.reduce((acc, cur) => {
    const price = Number(cur.price) * (cur.volume);
    acc += price;
    return acc;
  }, 0) : 0;
  return totalPrice;
}