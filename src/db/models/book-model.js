import { Book } from "../schemas/book-schema.js";

//TODO refactor : unique 검증 로직 추상화할 필요가 있나?
export class BookModel {
    //basic-user만 가능한 기능
    async findAll(){
        const books = await Book.find({})
        // populate
        // https://mongoosejs.com/docs/populate.html#field-selection
        // https://mongoosejs.com/docs/populate.html#transform-populated-documents
        await Book.populate(books, {
            path : 'category',
            select : 'title',
            transform: category => category == null ? null : category.title
        })
        return books;
    }

    async existsByISBN(ISBN){
        // https://mongoosejs.com/docs/api/model.html#model_Model-exists
        const book = await Book.exists({ISBN}).exec();
        return book !== null
    }

    async findByISBN(ISBN) {
        if(! (await this.existsByISBN(ISBN))){
            throw new Error(`DB에 ${ISBN}는 존재하지 않습니다.`)
        }
        const book = await Book.findOne({ ISBN })
        
        await Book.populate(book, {
            path : 'category',
            select : 'title',
            transform: category => category == null ? null : category.title
        })
        return book;
    }
  
    // admin만 가능한 기능
    async create(bookInfo) { //Object
        // DB에 이미 존재하지 않으면
        if(await this.existsByISBN(bookInfo.ISBN)){
            throw new Error(`DB에 ${bookInfo.ISBN}는 존재합니다.`)
        }

        return Book.create(bookInfo);
    }

    async update(ISBN, {bookInfo}, categoryId) {
        // DB에 있는 bookInfo랑 유저가 수정하려는 bookInfo가 다르면
        //이미 존재하지 않으면
        if(await this.existsByISBN(ISBN)){
            throw new Error(`DB에 ${ISBN}에 해당하는 Book이 존재하지 않습니다`)
        }
        //ISBN 값이 중복된다면?
        if(await this.existsByISBN(bookInfo.ISBN)){
            throw new Error(`해당하는 ISBN이 존재합니다. 고유한 값을 입력해주세요.`)
        }
        await Book.findOneAndUpdate({ ISBN }, bookInfo, { returnOriginal: false });
    }

    async deleteByISBN(ISBN) {
        if(await this.existsByISBN(ISBN)){
            throw new Error(`DB에 ${ISBN}는 존재하지 않아 삭제할 수 없습니다.`)
        }
        await Book.deleteOne({ ISBN });
    }

    // fix : 성능과 정합성 지키기 위해 수정
    // categoryId
    async deleteByCategory(categoryId) {        
        await Book.deleteMany({ category: categoryId })
    }

    //사용하지 마세요! db 초기화 용도로 사용하는 함수입니다.
    async dangerousDeleteAll() {
        await Book.deleteMany({});
    }
  }
  
  const bookModel = new BookModel();
  
  export { Book, bookModel };
  