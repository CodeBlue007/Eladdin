import * as Api from '../../api.js';

export async function viewOrderList() {
  const data = await Api.get('https://eladin-lgurfdxfjq-du.a.run.app/api/order/my');
  console.log('orderData', data);

  // const token = localStorage.getItem('token');

  // if (!token) {
  //   alert('로그인이 필요한 서비스입니다');
  //   return;
  // }
}
