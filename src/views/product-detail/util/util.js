
export function setLocal(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getLocal(key){
  const local = JSON.parse(localStorage.getItem(key));
  if(!local){
    console.log(local);
    return [];
  }
  return local;
}