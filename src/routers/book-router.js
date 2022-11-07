import { Router } from "express";
import { adminRequired } from "../middlewares/admin-required.js";
import { loginRequired } from "../middlewares/login-required.js";
import { bookService } from "../services/index.js";


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


//상품수정
bookRouter.put("/:ISBN", loginRequired, adminRequired, nextError(async (req, res, next) => {
  const ISBN = parseInt(req.params.ISBN)
  const bookInfo = req.body
  
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

// import { adminRequired } from "../middlewares/admin-required.js";
// import { loginRequired } from "../middlewares/login-required.js";
// import { bookService } from "../services/index.js";

// bookRouter.put("/:ISBN", loginRequired, adminRequired, nextError(async (req, res, next) => {
//   const ISBN = parseInt(req.params.ISBN)
//   const bookInfo = req.body

export { bookRouter };
