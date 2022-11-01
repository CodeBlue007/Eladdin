export function setLocal(data) {
  localStorage.setItem("bookInfo", JSON.stringify(data));
}

export function getLocal(key) {

  const localDatas = localStorage.getItem(key);

  return localDatas? JSON.parse(localDatas) : {};
}