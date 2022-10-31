import { Schema } from 'mongoose';

const BookSchema = new Schema({
  price: {
    type: number,
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
    type: number,
    required: true,
  },
  EBook: {
    type: boolean,
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
  // 추가기능
  // TODO 양탄자 배송 이름이 양탄자여야할까요?
  // TODO 카테고리는 어떻게 구현할까요?
});

export { BookSchema };
