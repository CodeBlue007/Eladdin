import { bookModel } from '../db/models/book-model'


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
      return bookModel.create(bookInfo);
  }

  async update({ ISBN, bookInfo }) {
      //DB에 있는 bookInfo랑 유저가 수정하려는 bookInfo가 다르면
      return bookModel.update({ ISBN, bookInfo });
  }

  async deleteByISBN(ISBN) {
      await bookModel.deleteByISBN(ISBN)
  }
}

const bookService = new BookService();

export { bookService };