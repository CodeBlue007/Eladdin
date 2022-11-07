import { Schema, model } from 'mongoose';

const BookSchema = new Schema({
  price: {
    type: Number,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  //성능상의 문제로 인해 Number Type으로 변경함
  ISBN: {
    type: Number,
    required: true,
    index: true,
    unique: true // 유일성 제약
  },
  EBook: {
    type: Boolean,
    required: false,
  },
  author: {
    type: [String],
    required: true,
  },
  publisher: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  publicationDate: {
    type: Date,
    required: true,
  },
  category: {    
    type: Schema.Types.ObjectId,
    ref: 'categories',
    required: true,
  },

});

const Book = model("books", BookSchema);

export { BookSchema, Book };
