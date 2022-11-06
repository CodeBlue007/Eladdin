import { OrderModel } from '../db/models/order-model.js'




export class OrderService {

    async getAllOrders(){
        return OrderModel.getAllOrders()
    }

    async getOrderById(orderId) {
        return OrderModel.getOrderById(orderId);
    }
    
    async getOrdersForUser(userId) { //Object
        return OrderModel.getOrdersForUser(userId);
    }

    async addOrder(cartItems, userId) { //Object

        return OrderModel.addOrder(cartItems, userId);

    }


    // async editOrderInfo(orderId) {
    //     await OrderModel.editOrderInfo({ _id : orderId })
    // }

    async editShippingStatus({ shippingStatus }, orderId){
        await OrderModel.editShippingStatus({ shippingStatus }, orderId)
    }

    async cancelOrderById(orderId){
        await OrderModel.cancelOrderById(orderId)
    }
  
    async cancelOrdersById(orderIdList) {
        await OrderModel.cancelOrdersById(orderIdList)
    }

}
  


const orderService = new OrderService();

export { orderService };