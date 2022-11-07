import { Router } from "express";
import { bookService, categoryService } from "../services/index.js";

// let mockBookDB = books;

const bookRouter = Router();

function nextError(callback){
  return async (req, res, next) => {
    await callback(req, res, next)
      .catch(next)
  };
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
