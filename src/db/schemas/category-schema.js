import { Schema } from 'mongoose';

const CategorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

export { CategorySchema };
