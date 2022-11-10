import { model } from "mongoose";
import { OrderSchema, ItemSchema } from "../schemas/order-schema.js";
import { Book } from './book-model.js';

const Order = model("orders", OrderSchema);
const Item = model("items", ItemSchema);

export class OrderModel {

    // 주문조회 ㅇ
    // 주문추가 ㅇ
    // 주문수정 ㅇ
    // 주문취소 ㅇ
    // 전체주문조회 admin ㅇ
    // 주문삭제 admin x ????
    // 주문상태정보조회 ???? ㅇ
    // 주문상태정보수정 admin ???? ㅇ

    //admin
    //TODO router에서 admin인거 확인하는 미들웨어 추가

    // https://mongoosejs.com/docs/api.html#model_Model-populate
    async getAllOrders(){
        const orders = await Order.find({})

        // https://mongoosejs.com/docs/populate.html#deep-populate
        await Order.populate(orders, { path: 'items', populate: { path: 'book' } })
        await Order.populate(orders, { path: 'user', populate : { path: 'address' } })
        
        console.log(orders)
        return orders;
    }

    async getOrderById(orderId) {
        const order = await Order.findById(orderId)
        await Order.populate(order, { path: 'items', populate: { path: 'book' } })
        await Order.populate(order, { path: 'user', populate : { path: 'address' } })
        
        return order
    }
    
    async getOrdersForUser(userId) {
        const orders = await Order.find({ user: { _id: userId } })
        await Order.populate(orders, { path: 'items', populate: { path: 'book' } })
        await Order.populate(orders, { path: 'user', populate : { path: 'address' } })

        console.log(orders)
        return orders;
    }

    /*
    cartItems
    [
        { 
            ISBN: '어쩌구',
            volume: 2
        },
        { 
            ISBN: '저쩌구',
            volume: 1
        }
    ]

    =>
    items
    [
        new Item({
            book: ???, // bookId
            volume: 2,
            totalPrice: ???,
        }),
        new Item({
            book: ???,
            volume: 1,
            totalPrice: ???,
        })
    ]
    */

    async addOrder(cartItems, userId) { //Object
        // ISBN과 volume을 가지고 있다

        // book은 가져오고, 가져온 book 정보로 totalPrice를 계산해야 함
        const ISBNList = cartItems.map(item => item.ISBN)
        
        const books = await Promise.all(ISBNList.map(ISBN => Book.findOne({ ISBN }).exec())) 
        console.log({
            cartItems,
            ISBNList,
            books
        })

        if (books.some(books => !books)){
            throw Error('존재하지 않는 ISBN이 포함되어 있습니다')
        }
        const items = books.map((book, i) =>{
            const volume = cartItems[i].volume;

            return new Item({
                book,
                volume,
                totalPrice: book.price * volume,
            });
        });

        const totalPrice = items.reduce((acc, orderItem) => acc + orderItem.totalPrice, 0)

        const order = new Order({
            items,
            totalPrice,
            shippingStatus: '배송준비중', // 처음에는 준비중
            user: userId
        })
        await order.save()
    }
    //????
    // async editOrderInfo({ }, orderId) { //Object
    //     return Order.findOneAndUpdate({_id : orderId }, newOrder, { returnOriginal: false });
    // }

    async editShippingStatus({ shippingStatus }, orderId) { //Object
        return Order.findOneAndUpdate({ _id : orderId }, { shippingStatus }, { returnOriginal: false });
    }
    
    async cancelOrderById(orderId) {
        const targetOrder = await Order.findById({_id : orderId}).exec();
        if(targetOrder.shippingStatus !== '배송준비중'){
            throw new Error(`배송준비중인 주문만 취소가 가능합니다.`)    
        }
        await Order.deleteOne({ _id : orderId })
    }
    
    //admin
    async cancelOrdersById(orderIdList) { //Array
        await Order.deleteOne({ _id : { $in: orderIdList } })
    }

    //사용하지 마세요! db 초기화 용도로 사용하는 함수입니다.
    async dangerousDeleteAll() {
        await Order.deleteMany({});
    }
}

const orderModel = new OrderModel();

export { orderModel };
  