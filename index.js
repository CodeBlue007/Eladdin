import 'dotenv/config';
import mongoose from 'mongoose';
import { app } from './src/app.js';


// .env 파일에 예를 들어 PORT="3000" 을 작성하면, process.env.PORT가 3000이 됨
const { PORT } = process.env.PORT || 8000;
const { MONGODB_URI } = process.env;

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


app.listen(PORT, () => {
  console.log(`정상적으로 서버를 시작하였습니다.  http://localhost:${PORT}`);
});
