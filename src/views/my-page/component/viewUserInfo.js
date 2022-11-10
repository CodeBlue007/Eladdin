import * as Api from '../../api.js';

export async function viewUserInfo() {
  const data = await Api.get('https://eladin-lgurfdxfjq-du.a.run.app/api/auth/my');
  console.log('userInfo', data);
}
