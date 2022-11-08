import { Router } from "express";
import { categoryService, bookService } from "../services/index.js";

const categoryRouter = Router();
// res.end()할 때 넣어주는 에러메세지를 변수로 빼는 것에 대해서(?)
function nextError(callback){
  return async (req, res, next) => {
    await callback(req, res, next)
      .catch(next)
  };
}

// 카테고리 title이 한글이여도 괜츈?
categoryRouter.get("/:title", nextError(async (req, res, next) => {
    const { title } = req.params;  
    const category = await categoryService.findByTitle(title);
    res.json(category);
  }));
  
  categoryRouter.put("/:title", nextError(async (req, res, next) => {
      const { title } = req.params;
      const categoryInfo = req.body;
      
      await categoryService.update({title, categoryInfo})
  
      res.status(200).end()
  }));
  
categoryRouter.delete("/:title", nextError(async (req, res, next) => {
      const { title } = req.params;
      const { id } = await categoryService.findByTitle(title);
      // books 먼저 삭제
      await bookService.deleteByCategory(id);

      // 그 후에 category 삭제
      await categoryService.deleteByTitle(title);

      res.status(204).end()
}));

categoryRouter.get("/", nextError(async (req, res, next) => {
  const categories = await categoryService.findAll(); 
  res.json(categories);
}));

categoryRouter.post("/", nextError(async (req, res, next) => {
  const newCategory = req.body;
  await categoryService.create(newCategory);
  
  res.status(201).end(`카테고리생성이 완료되었습니다.`)
}));



export { categoryRouter };