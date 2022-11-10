//fetch 해주는 부분은 myPage-order.js에 있어서 주석처리하였습니다.
// async function fetchData() {
//   const res = await fetch('./data/data.json');
//   const data = await res.json();
//   console.log(data);
//   return data;
// }

// function renderData(datas) {
//   const userInfo = document.querySelector('.userInfo');
//   const dataString = htmlTemplate(datas);
//   userInfo.innerHTML += dataString;
// }

// function htmlTemplate(datas) {
//   return datas.map((data) => {
//     const { email, fullName, phoneNumber, address } = data;

//     return `
//       <table class="user-info">
//         <tbody>
//           <tr>
//             <th scope="row">이메일</th>
//             <td>
//               <div class="usermodity-email">
//                 ${email} &nbsp;&nbsp;
//                 <button> 이메일 변경 </button>
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <th scope="row">이름</th>
//             <td>
//               <div class="usermodity-name">
//                 ${fullName} &nbsp;&nbsp;
//                 <button> 이름 변경 </button>
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <th scope="row">휴대폰 번호</th>
//             <td>
//               <div class="usermodity-phoneNumber">
//                 ${phoneNumber} &nbsp;&nbsp;
//                 <button> 휴대폰 번호 변경 </button>
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <th scope="row">비밀 번호</th>
//             <td>
//               <div class="usermodity-phoneNumber">
//                 <button> 비밀 번호 변경 </button>
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <th scope="row">주소 변경</th>
//             <td>
//               <div class="usermodity-address">
//               ${address} &nbsp;&nbsp;
//                 <button> 주소 변경 </button>
//               </div>
//             </td>
//           </tr>
//         </tbody>
//       </table>`;
//   });
// }

// fetchData().then((data) => renderData(data));
