import { Router } from "express";
import { bookService, categoryService } from "../services/index.js";


const bookRouter = Router();

function nextError(callback){
  return async (req, res, next) => {
    await callback(req, res, next)
      .catch(next)
  };
}

//상품조회
//eladin.com/books
bookRouter.get("/:ISBN", nextError(async (req, res, next) => {
  const ISBN = parseInt(req.params.ISBN)
  const book = await bookService.findByISBN(ISBN);
  
  res.json(book);
}));

// TODO: 로그인 기능 구현 시 middleware 추가
bookRouter.post("/", nextError(async (req, res, next) => {
  const category = req.body.category;
  const newBook = req.body;
  const { id } = await categoryService.findByTitle(category);
  
  await bookService.create({    
    imgUrl: newBook.imgUrl,
    title: newBook.title,
    ISBN: newBook.ISBN,
    EBook: newBook.EBook,
    author: newBook.author,
    publisher: newBook.publisher,
    description: newBook.description,
    price: newBook.price,
    publicationDate: newBook.publicationDate,
    category: id
  });
  
  await bookService.update({ISBN, bookInfo})
  res.status(200).end(`해당 책이 수정되었습니다.`)
}));

//상품삭제
bookRouter.delete("/:ISBN", loginRequired, adminRequired, nextError(async (req, res, next) => {
  const ISBN = parseInt(req.params.ISBN)
  await bookService.deleteByISBN(ISBN)
  res.status(204).end(`해당 책이 삭제되었습니다.`)
}));

//상품전체조회
bookRouter.get("/", nextError(async (req, res, next) => {
  const books = await bookService.findAll(); 
  res.json(books);
}));

//상품추가
bookRouter.post("/", loginRequired, adminRequired, nextError(async (req, res, next) => {
  const newBook = req.body;
  await bookService.create(newBook)
  
  res.status(201).end(`책이 추가되었습니다.`)
}));
export { bookRouter };
