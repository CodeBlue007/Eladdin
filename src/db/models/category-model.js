import { model } from "mongoose";
import { CategorySchema } from "../schemas/category-schema.js";

const Category = model("category", CategorySchema);

export class CategoryModel {

    async findAll() {
        return Category.find({});
    }

    async findByTitle(title) {
        if(await Category.exists({title}) == null){
            throw new Error(`DB에 ${title}는 존재하지 않습니다.`)
        }
        return Category.findOne({ title });
    }

    async create(categoryInfo) { 
        if(await Category.exists({title: categoryInfo.title}) !== null){
            throw new Error(`DB에 ${categoryInfo.title}는 존재합니다.`)
        }
        return Category.create(categoryInfo);
    }

    async update({ title, categoryInfo }) {
        if((await Category.exists({title})) == null){
            throw new Error(`DB에 ${title}에 해당하는 Category가 존재하지 않습니다.`)
        }
        await Category.findOneAndUpdate({ title }, categoryInfo, { returnOriginal: false });
    }

    async deleteByTitle(title) {
        if(await Category.exists({title}) == null){
            throw new Error(`DB에 ${title}는 존재하지 않아 삭제할 수 없습니다.`)
        }
        await Category.deleteOne({title})
    }

}

const categoryModel = new CategoryModel();
  
export { categoryModel };
