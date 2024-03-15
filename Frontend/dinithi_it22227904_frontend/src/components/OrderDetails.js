const OrderDetails = ({order}) => {
    return(
        <div className="order-details">
            <h4>Order ID: {order._id}</h4>
            <p><strong>Distributor ID: </strong>{order.distributorId}</p>
            <p><strong>Distributor Name: </strong>{order.distributorName}</p>
            <p><strong>Item(1) Code: </strong>{order.item1_code}</p>
            <p><strong>Item(1) Name: </strong>{order.item1_name}</p>
            <p><strong>Item(1) Quantity: </strong>{order.item1_quantity}</p>
            <p><strong>Item(2) Code: </strong>{order.item2_code}</p>
            <p><strong>Item(2) Name: </strong>{order.item2_name}</p>
            <p><strong>Item(2) Quantity: </strong>{order.item2_quantity}</p>
            <p><strong>Item(3) Code: </strong>{order.item3_code}</p>
            <p><strong>Item(3) Name: </strong>{order.item3_name}</p>
            <p><strong>Item(3) Quantity: </strong>{order.item3_quantity}</p>
            <p><strong>Order Status: </strong>{order.orderStatus}</p>
        </div>
    )
}

export default OrderDetails