import { model } from "mongoose";
import { BookSchema } from "../schemas/book-schema";

const Book = model("books", BookSchema);

export class BookModel { // BookRepository에 가까운듯
    //basic-user만 가능한 기능
    async findAll(){
        return Book.find({});
    }

    async findByISBN(ISBN) {
        return Book.findOne({ ISBN });
    }
  
    // admin만 가능한 기능
    async create(bookInfo) { //Object
        return Book.create(bookInfo);
    }

    async update({ ISBN, bookInfo }) {
        //DB에 있는 bookInfo랑 유저가 수정하려는 bookInfo가 다르면
        return Book.findOneAndUpdate({ ISBN }, bookInfo, { returnOriginal: false });
    }

    async deleteByISBN(ISBN) {
        await Book.deleteOne({ ISBN })
      }
  }
  
  const bookModel = new BookModel();
  
  export { bookModel };
  