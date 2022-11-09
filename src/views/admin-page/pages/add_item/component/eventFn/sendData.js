import * as Api from "../../../../../api.js";

export async function sendData(InfoArray) {
  
  const makeISBN = () => Number(Math.random().toString().substring(2,15));

  const fileInput = document.querySelector("#file");
  const EbookTrueInput = document.querySelector("#Ebooktrue");
  const formData = new FormData();


  try {
    const [title, select, author, publisher,
      publicationDate, price, Ebook, description, filename] = InfoArray;

    console.log(InfoArray);
    
    const file = fileInput.files[0];

    formData.append("file", file);

    const sendData = {
      "file" : formData,
      title,
      ISBN : makeISBN(),
      Ebook : EbookTrueInput.checked,
      author,
      publisher,
      description,
      price,
      publicationDate,
      category : select,
    }

    console.log(sendData);



    await Api.post("https://eladin-lgurfdxfjq-du.a.run.app/api/books",sendData);

    alert(`상품추가를 완료했습니다.`);

    window.location.href = "../../admin-page.html";
  } catch (err) {
    console.error(err.stack);
    alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
  }
}

