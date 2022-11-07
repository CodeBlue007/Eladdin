import { bookModel } from '../db/models/book-model.js'


export class BookService {
  //basic-user만 가능한 기능
  async findAll(){
      return bookModel.findAll();
  }

  async findByISBN(ISBN) {
      return bookModel.findByISBN(ISBN);
  }

  // admin만 가능한 기능
  async create(bookInfo) { //Object
      await bookModel.create(bookInfo);
  }

  async update({ ISBN, bookInfo }) {
      //DB에 있는 bookInfo랑 유저가 수정하려는 bookInfo가 다르면
      await bookModel.update({ ISBN, bookInfo });
  }

  async deleteByISBN(ISBN) {
      await bookModel.deleteByISBN(ISBN);
  }

  async deleteByCategory(category) {        
    await bookModel.deleteByCategory({ category });
  }
}

const bookService = new BookService();

export { bookService };