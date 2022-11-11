import { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

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
  totalPrice: {
    type: Number,
    required: true,
    min: 0
  }  
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
    },
    totalPrice: {
      type: Number,
      required: true,
      min: 0
    },
    // receiver: {
    //   type: new Schema({
    //     fullName: {
    //       type: String,
    //       required: true,
    //     },
    //     phoneNumber: {
    //       type: String,
    //       required: true,
    //     },
    //     address: {
    //       type: new Schema(
    //         {
    //           postalCode: String,
    //           address1: String,
    //           address2: String,
    //         },
    //         {
    //           _id: false,
    //         }
    //       ),
    //       required: true,
    //     }
    //   })
    // }
  }  
);

OrderSchema.plugin(timestamps);

export { OrderSchema, ItemSchema };
