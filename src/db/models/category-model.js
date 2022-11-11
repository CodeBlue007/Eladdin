import { Book } from "../schemas/book-schema.js";
import { Category } from "../schemas/category-schema.js";


export class CategoryModel {

    async findAll() {
        return Category.find({});
    }

    async findByTitle(title) {
        if(await this.existBytitle(title)){
            throw new Error(`DB에 ${title}는 존재하지 않습니다.`)
        }
        return Category.findOne({ title });
    }

    async create(categoryInfo) { 
        if(await this.existBytitle(categoryInfo.title)){
            throw new Error(`DB에 ${categoryInfo.title}는 존재합니다.`)
        }
        return Category.create(categoryInfo);
    }

    async update({ title, categoryInfo }) {
        if(await this.existBytitle(title)){
            throw new Error(`DB에 ${title}에 해당하는 Category가 존재하지 않습니다.`)
        }
        await Category.findOneAndUpdate({ title }, categoryInfo, { returnOriginal: false });
    }

    async deleteByTitle(title) {
        if(await this.existBytitle(title)){
            throw new Error(`DB에 ${title}는 존재하지 않아 삭제할 수 없습니다.`)
        }
        await Category.deleteOne({title})
    }


    async existBytitle(title){
        const category = await Category.exists({title}).exec();
        return category !== null;
    }

}

const categoryModel = new CategoryModel();
  
export { categoryModel };
