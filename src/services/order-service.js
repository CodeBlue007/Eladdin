import { orderModel } from '../db/models/order-model.js'

//console.log(orderModel)


export class OrderService {
   
    
    async getAllOrders(){
        return orderModel.getAllOrders()
    }
    
    async getOrdersForUser(userId) { //Object
        return orderModel.getOrdersForUser(userId);
    }

    async getOrderById(orderId) {
        return orderModel.getOrderById(orderId);
    }
    

    async addOrder(cartItems, userId) { //Object

        return orderModel.addOrder(cartItems, userId);

    }

    // async editOrderInfo(orderId) {
    //     await orderModel.editOrderInfo({ _id : orderId })
    // }

    async editShippingStatus({ shippingStatus }, orderId){
        await orderModel.editShippingStatus({ shippingStatus }, orderId)
    }

    async cancelOrderById(orderId){
        await orderModel.cancelOrderById(orderId)
    }
  
    async cancelOrdersById(orderIdList) {
        await orderModel.cancelOrdersById(orderIdList)
    }

}
  


const orderService = new OrderService();

export { orderService };