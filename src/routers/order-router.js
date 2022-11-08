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
//사용자 주문 내역 조회
orderRouter.get("/my", loginRequired, nextError(async (req, res, next) => {
  const userId = req.currentUserId;
  const order = await orderService.getOrdersForUser(userId);
  res.json(order)
}));

//관리자 배송정보 변경
orderRouter.patch('/:orderId/shippingStatus', loginRequired, adminRequired, nextError(async (req, res, next)=> {
  const { shippingStatus } = req.body;
  const { orderId } = req.params;

  await orderService.editShippingStatus({shippingStatus}, orderId)
  res.status(200).end()
}))

// //사용자 주문 상태 정보조회
// orderRouter.get("/:orderId", loginRequired, nextError(async (req, res, next) => {
//   const { orderId } = req.params
//   const order = await orderService.getOrderById(orderId);
//   res.json(order);
// }));

//사용자 주문 취소
orderRouter.delete("/:orderId", loginRequired, nextError(async (req, res, next) => {
  const orderId = req.params.orderId
  await orderService.cancelOrderById(orderId)
  res.status(204).end()
}));

//관리자 주문 삭제
orderRouter.delete("/", loginRequired, adminRequired, nextError(async (req, res, next) => {
  const orderIdList = req.body
  await orderService.cancelOrdersById(orderIdList)
  res.status(204).end()
}));

//TODO 주문수정


//관리자 주문 조회
orderRouter.get("/", loginRequired, adminRequired, nextError(async (req, res, next) => {
  const orders = await orderService.getAllOrders(); 
  res.json(orders);
}));


// 사용자 주문 추가
// [{ "ISBN": 9788991268104, "volume": 2 }, {"ISBN": 9791185885247, "volume": 1}]
orderRouter.post("/", loginRequired, nextError(async (req, res, next) => {
  const userId = req.currentUserId
  const cartItems = req.body
  
  await orderService.addOrder(cartItems, userId)
  res.status(201).end()
}));


export { orderRouter };
