import * as Api from '../../api.js';

export async function viewOrderList() {
  const data = await Api.get('https://eladin-lgurfdxfjq-du.a.run.app/api/order/my');
  console.log('orderData', data);
}
