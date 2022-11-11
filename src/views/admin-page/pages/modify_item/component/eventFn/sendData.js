import * as Api from "../../../../../api.js";

export async function sendData(InfoArray) {

  const ISBN = JSON.parse(localStorage.getItem("ISBN"));
  const Ebooktrue = document.querySelector("#Ebooktrue");

  const [title, select, author, publisher,
    publicationDate, price, Ebook, description] = InfoArray;   

    const newData = {
      title,
      Ebook : Ebooktrue.checked,
      author,
      publisher,
      description,
      category : select,
      price,
      publicationDate,
    }

  try {
    await Api.put(`https://eladin-lgurfdxfjq-du.a.run.app/api/books/${ISBN}`,'',newData);

    alert(`상품수정을 완료했습니다.`);

    window.location.href = "../../admin-page.html";
  } catch (err) {
    console.error(err.stack);
    alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
  }
}

