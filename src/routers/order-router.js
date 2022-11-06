import { Router } from "express";
import { adminRequired } from "../middlewares/admin-required.js";
import { loginRequired } from "../middlewares/login-required.js";
import { orderService } from "../services/index.js";

// let mockOrderDB = orders;

const orderRouter = Router();

function nextError(callback){
  return async (req, res, next) => {
    await callback(req, res, next)
      .catch(next)
  };
}
    // 주문조회 ㅇ
    // 주문추가 ㅇ
    // 주문수정 ㅇ
    // 주문취소 ㅇ
    // 전체주문조회 admin ㅇ
    // 주문삭제 admin x ????
    // 주문상태정보조회 ???? ㅇ
    // 주문상태정보수정 admin ???? ㅇ

//eladin.com/order/admin
orderRouter.get("/admin", loginRequired, adminRequired, nextError(async (req, res, next) => {
  const orders = await orderService.getAllOrders(); 
  res.json(orders);
}));

orderRouter.get("/:orderId", loginRequired, nextError(async (req, res, next) => {
  const orderId = req.params.orderId
  const order = await orderService.getOrderById(orderId);
  res.json(order);

}));
///api/order/:orderID
orderRouter.get("/:userId", loginRequired, nextError(async (req, res, next) => {
  const userId = req.params.userId;
const order = await orderService.getOrdersForUser(userId);
  res.json(order)
}));


orderRouter.post("/:userId", nextError(async (req, res, next) => {
    const { userId } = req.params
    const { cartItems}  = req.body
    
    await orderService.addOrder(userId, cartItems)
    res.status(201).end()
}));


orderRouter.patch('/admin/:orderId', loginRequired, adminRequired, nextError(async (req, res, next)=> {

    const { shippingStatus } = req.body;
    const { orderId } = req.params;

    await orderService.editShippingStatus({shippingStatus}, orderId)
    res.status(200).end('배송정보가 변경되었습니다.')

}))

orderRouter.delete("/:orderId", nextError(async (req, res, next) => {
    const orderId = req.params
    await orderService.cancelOrderById(orderId)
    res.status(204).end('주문이 취소되었습니다.')
}));

orderRouter.delete("/admin", nextError(async (req, res, next) => {
    const { orderIdList } = req.body
    await orderService.cancelOrdersById([...orderIdList])
    res.status(204).end('주문을 취소하였습니다.')
}));


//TODO 주문수정

export { orderRouter };
