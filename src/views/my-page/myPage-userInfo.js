async function fetchData() {
  const res = await fetch('./data/data.json');
  const data = await res.json();
  console.log(data);
  return data;
}

function renderData(datas) {
  const bookInfo = document.querySelector('.userInfo');
  const dataString = htmlTemplate(datas);
  bookInfo.innerHTML += dataString;
}

function htmlTemplate(datas) {
  return datas.map((data) => {
    const { email, fullName, phoneNumber } = data;

    return `
  <ul class="user-info">
    <li class="fullName">이름 &nbsp;${fullName}</li>
    <li class="phoneNumber">휴대폰 번호 &nbsp;${phoneNumber}</li>
    <li class="email">이메일 &nbsp;${email}</li>
    <button class="password">비밀번호 변경하기</button>
  </ul>`;
  });
}

fetchData().then((data) => renderData(data));
