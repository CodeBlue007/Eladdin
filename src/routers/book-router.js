import { Router } from "express";
// import { bookService } from "../services";
import books from "../db/mockBooks.json"

let mockBookDB = books;

const bookRouter = Router();
//eladin.com/books
bookRouter.get("/", async (req, res) => {
    res.json(mockBookDB);
  }
);

// TODO: 로그인 기능 구현 시 middleware 추가
bookRouter.post("/", async (req, res) => {
    mockBookDB.push(req.body)  

    res.send(mockBookDB);
  }
);

export { bookRouter };
