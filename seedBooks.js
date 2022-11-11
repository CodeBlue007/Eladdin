import 'dotenv/config';
import mongoose from "mongoose";
//import { bookModel } from "./src/db/models/book-model.js";
import { bookService } from "./src/services/index.js";
import mockBooks from "./src/db/mockBooks.js";

const DB_URL =
  process.env.MONGODB_URL ||
  "MongoDB 서버 주소가 설정되지 않았습니다.\n./db/index.ts 파일을 확인해 주세요. \n.env 파일도 필요합니다.\n";

mongoose.connect(DB_URL);
const db = mongoose.connection;

db.on("connected", async () =>{

    //  await bookModel.dangerousDeleteAll();
    // console.log('기존 데이터를 모두 삭제합니다.')

    const existBooks = await bookService.findAll();
    if(existBooks.length > 0){
        console.error('이미 데이터가 존재합니다.', existBooks)
        return;
    }
    console.log('시딩을 시작합니다.')

    const temp = []
    const duplicated = []
    
    for (const book of mockBooks){
        if(temp.some((item)=> item.ISBN === book.ISBN)){
            duplicated.push(book)
        }
        temp.push(book)
    }
    if(duplicated.length > 0){
        console.error('중복되는 ISBN이 존재합니다.', duplicated)
        return;
    }
    for (const book of mockBooks){
        await bookService.create(book)
    }
    console.log('시딩을 완료했습니다.', await bookService.findAll())

}
  
);
db.on("error", (error) =>
  console.error("\nMongoDB 연결에 실패하였습니다...\n" + DB_URL + "\n" + error)
);