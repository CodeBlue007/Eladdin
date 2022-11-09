import { Router } from "express";
import { bookService, categoryService } from "../services/index.js";
import { adminRequired } from "../middlewares/admin-required.js";
import { loginRequired } from "../middlewares/login-required.js";
import { Storage } from "@google-cloud/storage";
import Multer from "multer";

const bookRouter = Router();
const storage = new Storage({keyFilename: 'key.json'});
const bucketName = "eladin_img";

const multer = Multer({
    storage: Multer.memoryStorage(),
      limits: {
        fileSize: 2 * 1024 * 1024, // no larger than 2mb, you can change as needed.
    },
});

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

//상품추가
bookRouter.post("/", loginRequired, adminRequired, multer.single("file"), nextError(async (req, res, next) => {
  const category = req.body.category;
  const newBook = req.body;  
  const { id } = await categoryService.findByTitle(category);

  /// img파일전송 코드 -- 시작
  if (!req.file) {
    res.status(400).send('No file uploaded.');
    return;
  }
  // Create a new blob in the bucket and upload the file data.
  const blob = storage.bucket(bucketName).file(req.file.originalname);
  const blobStream = blob.createWriteStream();
  let publicUrl = '';

  blobStream.on('error', err => {
    next(err);
  });

  // blobStream.on('finish', () => {
  //   // The public URL can be used to directly access the file via HTTP.
  //   // publicUrl = format(
  //   //   `https://storage.googleapis.com/${bucketName}/${blob.name}`
  //   // );
  //   // res.status(200).send();
  // });

  blobStream.end(req.file.buffer);
  /// img파일전송 코드 -- 끝
  await bookService.create({    
    imgUrl: `https://storage.googleapis.com/${bucketName}/${blob.name}`,
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
