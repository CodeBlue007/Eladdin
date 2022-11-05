async function fetchData() {
  const res = await fetch('../../db/mockBooks_1.json');
  const data = await res.json();
  console.log(data);
  return data;
}

function renderData(datas) {
  const bookInfo = document.querySelector('.view-category');
  const dataString = htmlTemplate(datas);
  bookInfo.innerHTML += dataString;
}

function htmlTemplate(datas) {
  return datas
    .map((data) => {
      const { category } = data;

      return `
    <div class="category">
      <ul class="category-list">
        <li class="category-name">${category}</li>
        <button class="editCategory-btn">수정</button>
        <button class="deleteCategory-btn">삭제</button>
      </ul>
    </div>`;
    })
    .join('');
}

fetchData().then((data) => renderData(data));
