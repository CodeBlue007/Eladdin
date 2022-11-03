import 'dotenv/config';
import mongoose from "mongoose";
import { userModel } from "./src/db/models/user-model.js";
import { userService } from "./src/services/index.js";
import mockUsers from "./src/db/mockUsers.js";

const DB_URL =
  process.env.MONGODB_URL ||
  "MongoDB 서버 주소가 설정되지 않았습니다.\n./db/index.ts 파일을 확인해 주세요. \n.env 파일도 필요합니다.\n";

mongoose.connect(DB_URL);
const db = mongoose.connection;

db.on("connected", async () =>{

    await userModel.dangerousDeleteAll();
    console.log('기존 데이터를 모두 삭제합니다.')

    const existUsers = await userService.findAll();
    if(existUsers.length > 0){
        console.error('이미 데이터가 존재합니다.', existUsers)
        return;
    }
    console.log('시딩을 시작합니다.')

    const temp = []
    const duplicated = []
    
    for (const user of mockUsers){
        if(temp.some((item)=> item.email == user.email)){
            duplicated.push(user)
        }
        temp.push(user)
    }
    if(duplicated.length > 0){
        console.error('이메일이 중복되는 사용자가 존재합니다.', duplicated)
        return;
    }
    for (const user of mockUsers){
        await userService.addUser(user)
    }
    console.log('시딩을 완료했습니다.', await userService.findAll())

}
  
);
db.on("error", (error) =>
  console.error("\nMongoDB 연결에 실패하였습니다...\n" + DB_URL + "\n" + error)
);