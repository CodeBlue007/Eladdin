import 'dotenv/config';
import mongoose from "mongoose";
//import { orderModel } from "./src/db/models/order-model.js";
import { orderService } from "./src/services/index.js";
import mockOrders from "./src/db/mockOrders.js";

const DB_URL =
  process.env.MONGODB_URL ||
  "MongoDB 서버 주소가 설정되지 않았습니다.\n./db/index.ts 파일을 확인해 주세요. \n.env 파일도 필요합니다.\n";

mongoose.connect(DB_URL);
const db = mongoose.connection;

db.on("connected", async () =>{

    //  await orderModel.dangerousDeleteAll();
    // console.log('기존 데이터를 모두 삭제합니다.')

    const existOrders = await orderService.findAll();
    if(existOrders.length > 0){
        console.error('이미 데이터가 존재합니다.', existOrders)
        return;
    }
    console.log('시딩을 시작합니다.')

    const temp = []
    const duplicated = []
    
    for (const order of mockOrders){
        if(temp.some((item)=> item._id == order._id)){
            duplicated.push(order)
        }
        temp.push(order)
    }
    if(duplicated.length > 0){
        console.error('중복되는 id가 존재합니다.', duplicated)
        return;
    }
    for (const order of mockOrders){
        await orderService.addOrder(order)
    }
    console.log('시딩을 완료했습니다.', await orderService.findAll())

}
  
);
db.on("error", (error) =>
  console.error("\nMongoDB 연결에 실패하였습니다...\n" + DB_URL + "\n" + error)
);