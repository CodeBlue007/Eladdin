import { categoryModel } from '../db/models/category-model.js'


export class CategoryService {
  //basic-user만 가능한 기능
  async findAll(){
      return categoryModel.findAll();
  }

  async findByTitle(title) {
      return categoryModel.findByTitle(title);
  }

  async create(categoryInfo) {
      await categoryModel.create(categoryInfo);
  }

  async update({ title, categoryInfo }) {
      await categoryModel.update({ title, categoryInfo });
  }

  async deleteByTitle(title) {
      await categoryModel.deleteByTitle(title);
  }
}

const categoryService = new CategoryService();

export { categoryService };