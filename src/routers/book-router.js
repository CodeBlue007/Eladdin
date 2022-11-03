import { Router } from "express";
import { bookService } from "../services/index.js";
//import books from "../db/mockBooks.js"

// let mockBookDB = books;

const bookRouter = Router();
//eladin.com/books
bookRouter.get("/", async (req, res) => {
  const books = await bookService.findAll(); 
  res.json(books);
});

bookRouter.get("/:ISBN", async (req, res) => {
  const ISBN = parseInt(req.params.ISBN)
  const book = bookService.findByISBN(ISBN);
  
  //ISBN으로 
  res.json(book);
});

// TODO: 로그인 기능 구현 시 middleware 추가
bookRouter.post("/", async (req, res) => {
  const newBook = req.body;
  await bookService.create(newBook)
  
  res.status(201).end()
});

bookRouter.put("/:ISBN", async (req, res) => {
  const ISBN = parseInt(req.params.ISBN)
  const bookInfo = req.body
  
  await bookService.update({ISBN, bookInfo})
  res.status(200).end()
});


bookRouter.delete("/:ISBN", async (req, res) => {
  const ISBN = parseInt(req.params.ISBN)
  await bookService.deleteByISBN(ISBN)
  res.status(204).end()
});



export { bookRouter };
