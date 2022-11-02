import { Router } from "express";
import { bookService } from "../services/index.js";
import books from "../db/mockBooks.js"

let mockBookDB = books;

const bookRouter = Router();
//eladin.com/books
bookRouter.get("/", async (req, res) => {
    const books = await bookService.findAll();
    res.json(books);
  }
);

bookRouter.get("/:ISBN", async (req, res) => {
  const ISBN = parseInt(req.params.ISBN)
  const book = mockBookDB.find(book=> book.ISBN === ISBN);
  console.log(book)
  res.json(book);
}
);

// TODO: 로그인 기능 구현 시 middleware 추가
bookRouter.post("/", async (req, res) => {
    const newBook = req.body;
    await bookService.create(newBook);
  }
);

bookRouter.put("/:ISBN", async (req, res) => {
  const ISBN = parseInt(req.params.ISBN)
  const bookInfo = req.body
  await bookService.update({ISBN, bookInfo})
}
);


bookRouter.delete("/:ISBN", async (req, res) => {
  const ISBN = parseInt(req.params.ISBN)
  await bookService.deleteByISBN(ISBN)
}
);



export { bookRouter };
