import { Router } from "express";
import { categoryService } from "../services/index.js";

const categoryRouter = Router();

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
  
  res.status(201).end()
}));



export { categoryRouter };