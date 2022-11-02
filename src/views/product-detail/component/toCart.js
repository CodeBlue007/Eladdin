async function fetchData() {
  const res = await fetch('./data/data.json');
  const data = await res.json();
  const cartData = data.map((item) => ({ ...item, volume: 1, checked: true }));
  return cartData;
}

function addEvent(data) {
  const cart_btn = document.querySelector('.cart');
  cart_btn.addEventListener('click', () => setData(data));
}
function setData(data) {
  localStorage.setItem('bookInfo', JSON.stringify(data));
  const localDatas = localStorage.getItem('bookInfo');
  console.log(JSON.parse(localDatas));
}

function renderData() {
  const product_detail = document.querySelector('.product-detail');
  // const dataString = addItems(datas);
  // product_detail.innerHTML = dataString;
}

async function App() {
  try {
    const cartData = await fetchData();
    renderData(cartData);
    addEvent(cartData);
  } catch (err) {
    console.log(err);
  }
}

App();
