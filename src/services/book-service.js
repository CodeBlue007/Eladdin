import { bookModel } from '../db/models/book-model.js'
import { categoryModel } from '../db/models/category-model.js'


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
    if((await categoryModel.existByTitle(bookInfo.category)) === false){
        throw Error('존재하지 않는 카테고리입니다.')
    }

    const category = await categoryModel.findByTitle(bookInfo.category)

    await bookModel.create({...bookInfo, category});
  }

  async update({ ISBN, bookInfo }) {
    if((await categoryModel.existByTitle(bookInfo.category)) === false){
        throw Error('존재하지 않는 카테고리입니다.')
    }
    //DB에 있는 bookInfo랑 유저가 수정하려는 bookInfo가 다르

      await bookModel.update({ ISBN, bookInfo });

    }

  async deleteByISBN(ISBN) {
    await bookModel.deleteByISBN(ISBN)
  }

  async deleteByCategory(category) {        
    await bookModel.deleteByCategory(category);
  }
}

const bookService = new BookService();

export { bookService };