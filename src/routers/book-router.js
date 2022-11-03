import { Router } from "express";
import { bookService } from "../services/index.js";

// let mockBookDB = books;

const bookRouter = Router();

function nextError(callback){
  return async (req, res, next) => callback(req, res, next).then(next);
}

//eladin.com/books
bookRouter.get("/", nextError(async (req, res, next) => {
  const books = await bookService.findAll(); 
  res.json(books);
}));

bookRouter.get("/:ISBN", nextError(async (req, res, next) => {
  const ISBN = parseInt(req.params.ISBN)
  const book = await bookService.findByISBN(ISBN);
  
  //ISBN으로 
  res.json(book);
}));

// TODO: 로그인 기능 구현 시 middleware 추가
bookRouter.post("/", nextError(async (req, res, next) => {
  const newBook = req.body;
  await bookService.create(newBook)
  
  res.status(201).end()
}));

bookRouter.put("/:ISBN", nextError(async (req, res, next) => {
    const ISBN = parseInt(req.params.ISBN)
    const bookInfo = req.body
    
    await bookService.update({ISBN, bookInfo})

    res.status(200).end()
}));


bookRouter.delete("/:ISBN", nextError(async (req, res, next) => {
    const ISBN = parseInt(req.params.ISBN)
    await bookService.deleteByISBN(ISBN)
    res.status(204).end()
}));



export { bookRouter };
