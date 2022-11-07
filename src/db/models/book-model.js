import { Book } from "../schemas/book-schema.js";

const Book = model("books", BookSchema);
//TODO refactor : unique 검증 로직 추상화할 필요가 있나?
export class BookModel {
    //basic-user만 가능한 기능
    async findAll(){
        return Book.find({})
            .populate('category', 'title');                
    }

    async findByISBN(ISBN) {
        if(await Book.exists({ISBN}) == null){
            throw new Error(`DB에 ${ISBN}는 존재하지 않습니다.`)
        }
        return Book.findOne({ ISBN })
            .populate('category', 'title');
    }
  
    // admin만 가능한 기능
    async create(bookInfo) { //Object
        // DB에 이미 존재하지 않으면
        if(await Book.exists({ISBN : bookInfo.ISBN}) !== null){
            throw new Error(`DB에 ${bookInfo.ISBN}는 존재합니다.`)
        }

        return Book.create(bookInfo);
    }

    async update({ ISBN, bookInfo }) {
        // DB에 있는 bookInfo랑 유저가 수정하려는 bookInfo가 다르면
        //이미 존재하지 않으면
        //console.log(ISBN)
        //console.log(await Book.exists({ISBN}))
        //console.log(await Book.findOne({ISBN}))
        if((await Book.exists({ISBN})) == null){
            throw new Error(`DB에 ${ISBN}에 해당하는 Book이 존재하지 않습니다`)
        }
        await Book.findOneAndUpdate({ ISBN }, bookInfo, { returnOriginal: false });
    }

    async deleteByISBN(ISBN) {
        if(await Book.exists({ISBN}) == null){
            throw new Error(`DB에 ${ISBN}는 존재하지 않아 삭제할 수 없습니다.`)
        }
        await Book.deleteOne({ ISBN });
    }

    async deleteByCategory(categoryId) {        
        if(await Book.exists(categoryId)){
            while(true) {                
                await Book.findOneAndDelete(categoryId);
                if(!(await Book.exists(categoryId))) break;
            }
        } else {
            return;
        }
    }

    //사용하지 마세요! db 초기화 용도로 사용하는 함수입니다.
    async dangerousDeleteAll() {
        await Book.deleteMany({});
    }
  }
  
  const bookModel = new BookModel();
  
  export { Book, bookModel };
  