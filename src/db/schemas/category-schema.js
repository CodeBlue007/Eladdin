import { Schema, model } from 'mongoose';

const CategorySchema = new Schema({
  title: {
    type: String,
    required: true,
    unique : true,
    index : true
  },
});

const Category = model("categories", CategorySchema);

export { CategorySchema, Category };
