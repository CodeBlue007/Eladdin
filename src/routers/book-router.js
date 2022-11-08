import { Router } from "express";
import { bookService, categoryService } from "../services/index.js";
import { adminRequired } from "../middlewares/admin-required.js";
import { loginRequired } from "../middlewares/login-required.js";


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


bookRouter.post("/", loginRequired, adminRequired, nextError(async (req, res, next) => {
  const category = req.body.category;
  const newBook = req.body;
  
  const { id } = await categoryService.findByTitle(category);
  
  await bookService.create({    
    ...newBook,
    category: id
  });
  
  res.status(200).end()
}));

bookRouter.put("/:ISBN", loginRequired, adminRequired, nextError(async (req, res, next) => {
  const ISBN = parseInt(req.params.ISBN)
  const bookInfo = req.body

    await bookService.update({ISBN, bookInfo})
    res.status(200).end()
  
}))

//상품삭제
bookRouter.delete("/:ISBN", loginRequired, adminRequired, nextError(async (req, res, next) => {
  const ISBN = parseInt(req.params.ISBN)
  await bookService.deleteByISBN(ISBN)
  res.status(204).end()
}));

//상품전체조회
bookRouter.get("/", nextError(async (req, res, next) => {
  const books = await bookService.findAll(); 
  res.json(books);
}));


export { bookRouter };
