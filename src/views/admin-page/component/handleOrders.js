export function handleData(orders){
    const bookInfo = orders.reduce((arr, order) =>{
        const orderArr = [];
        order.items.forEach(item=>{
            const bookobj = {};
            bookobj["title"] = item.book.title;
            bookobj["ISBN"] = item.book.ISBN;
            bookobj["price"] = item.totalPrice;
            bookobj["volume"] = item.volume;
            bookobj["orderId"] = order._id;
            bookobj["shippingStatus"] = order.shippingStatus;
            bookobj["orderDate"] = order.user.createdAt.slice(0,11);
            orderArr.push(bookobj);
        });
        arr.push(orderArr);
        return arr;
    },[]);
} 





export function renderByShipping(shippingStatus){
    if(shippingStatus = "")
}