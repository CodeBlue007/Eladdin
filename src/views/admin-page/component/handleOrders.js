export function handleData(orders){
    const orderInfo = orders.reduce((arr, order) =>{
        const orderArr = [];
        order.items.forEach(item=>{
            const bookobj = {};
            bookobj["title"] = item.book.title;
            bookobj["ISBN"] = item.book.ISBN;
            bookobj["price"] = item.totalPrice;
            bookobj["volume"] = item.volume;
            bookobj["orderId"] = order._id;
            bookobj["shippingStatus"] = order.shippingStatus;
            bookobj["orderDate"] = order.user.createdAt.slice(0,10);
            orderArr.push(bookobj);
        });
        arr.push(orderArr);
        return arr;
    },[]);

    console.log(orderInfo);

    return orderInfo;
} 





export function renderByShipping(shippingStatus,orderId){

    if(shippingStatus === "배송준비중"){
        return  `<select class="shipping_select" data-id=${orderId}>
        <option value="delivery_ready" selected>배송준비중</option>
        <option value="delivering">배송중</option>
        <option value="delivered">배송완료</option>
      </select>`
    }
    else if(shippingStatus === "배송중"){
        return  `<select class="shipping_select" data-id=${orderId}>
        <option value="delivery_ready">배송준비중</option>
        <option value="delivering" selected>배송중</option>
        <option value="delivered">배송완료</option>
      </select>` 
    }
    else if(shippingStatus === "배송완료"){
        return  `<select class="shipping_select" data-id=${orderId}>
        <option value="delivery_ready">배송준비중</option>
        <option value="delivering">배송중</option>
        <option value="delivered" selected>배송완료</option>
      </select>` 
    }
    else{
        return `<select class="shipping_select" data-id=${orderId}>
        <option value="delivery_ready">배송준비중</option>
        <option value="delivering">배송중</option>
        <option value="delivered">배송완료</option>
      </select>`
    }
}