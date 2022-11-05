import { Schema } from 'mongoose';

const ItemSchema = new Schema({
  book: {
    type: Schema.Types.ObjectId,
    ref : 'books',
    required: true
  }, 
  volume: {
    type: Number,
    required: true,
    min: 1
  },
  price: {
    type: Number,
    required: true,
    min: 0
  }
},
{
    _id : true //이거 굳이?
});

const OrderSchema = new Schema(
  {
    //id가 자동생성되어 나중에 id 가져올 수 있음
    items: {
      type: [ItemSchema],
      required: true,
    },
    shippingStatus: {
      type: String,
      enum: ['배송준비중', '배송중', '배송완료'], //준비중 배송중 배송완료
      required: true,
      default: '배송준비중',
    },
    user: {
      type: Schema.Types.ObjectId,
      ref : 'users'
    }
  },
  { timestamp: true, _id : true }, //createdAt, updatedAt을 mock에 추가하기
);

export { OrderSchema, ItemSchema };
