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

//eladin.com/order/ ㅇ
orderRouter.get("/", loginRequired, adminRequired, nextError(async (req, res, next) => {
  const orders = await orderService.getAllOrders(); 
  res.json(orders);
}));

// /api/order/my ㅇ
orderRouter.get("/my", loginRequired, nextError(async (req, res, next) => {
  const userId = req.currentUserId;
  const order = await orderService.getOrdersForUser(userId);
  res.json(order)
}));

// /api/order/my
// [{ "ISBN": 9788991268104, "volume": 2 }, {"ISBN": 9791185885247, "volume": 1}]
orderRouter.post("/", loginRequired, nextError(async (req, res, next) => {
  const userId = req.currentUserId
  const cartItems = req.body
  
  const orders = await orderService.addOrder(cartItems, userId)
  res.status(201).json(orders)
}));

//상세정보
orderRouter.get("/:orderId", loginRequired, nextError(async (req, res, next) => {
  const { orderId } = req.params
  const order = await orderService.getOrderById(orderId);
  res.json(order);
}));

orderRouter.patch('/:orderId/shippingStatus', loginRequired, adminRequired, nextError(async (req, res, next)=> {
  const { shippingStatus } = req.body;
  const { orderId } = req.params;

  await orderService.editShippingStatus({shippingStatus}, orderId)
  res.status(200).end('배송정보가 변경되었습니다.')
}))

orderRouter.delete("/:orderId", loginRequired, nextError(async (req, res, next) => {
  const orderId = req.params.orderId
  await orderService.cancelOrderById(orderId)
  res.status(204).end('주문이 취소되었습니다.')
}));

orderRouter.delete("/", loginRequired, adminRequired, nextError(async (req, res, next) => {
  const orderIdList = req.body
  await orderService.cancelOrdersById(orderIdList)
  res.status(204).end('주문을 취소하였습니다.')
}));

//TODO 주문수정

export { orderRouter };
