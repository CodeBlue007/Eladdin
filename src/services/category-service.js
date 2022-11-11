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
    //await bookModel.updateCategoryTitle(title, categoryInfo.title); // 모든 book을 찾아서 title을 새 title로 변경

      await categoryModel.update({ title, categoryInfo });
  }

  async deleteByTitle(title) {
    //await bookModel.deleteByCategory(title);

      await categoryModel.deleteByTitle(title);
  }

//   async existByTitle(title) {
//       await categoryModel.existByTitle(title);
//   }
// }
}

const categoryService = new CategoryService();

export { categoryService };