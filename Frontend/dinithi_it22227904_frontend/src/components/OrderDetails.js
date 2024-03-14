const OrderDetails = ({order}) => {
    return(
        <div className="order-details">
            <table class="tg">
                <thead>
                    <tr>
                        <th class="tg-0lax">Order ID</th>
                        <th class="tg-0lax">Distributor ID</th>
                        <th class="tg-0lax">Distributor Name</th>
                        <th class="tg-0lax">Item(1) Code</th>
                        <th class="tg-0lax">Item(1) Name</th>
                        <th class="tg-0lax">Item(1) Quantity</th>
                        <th class="tg-0lax">Item(2) Code</th>
                        <th class="tg-0lax">Item(2) Name</th>
                        <th class="tg-0lax">Item(2) Quantity</th>
                        <th class="tg-0lax">Item(3) Code</th>
                        <th class="tg-0lax">Item(3) Name</th>
                        <th class="tg-0lax">Item(3) Quantity</th>
                        <th class="tg-0lax">Order Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="tg-0lax">{order._id}</td>
                        <td class="tg-0lax">{order.distributorId}</td>
                        <td class="tg-0lax">{order.distributorName}</td>
                        <td class="tg-0lax">{order.item1_code}</td>
                        <td class="tg-0lax">{order.item1_name}</td>
                        <td class="tg-0lax">{order.item1_quantity}</td>
                        <td class="tg-0lax">{order.item2_code}</td>
                        <td class="tg-0lax">{order.item2_name}</td>
                        <td class="tg-0lax">{order.item2_quantity}</td>
                        <td class="tg-0lax">{order.item3_code}</td>
                        <td class="tg-0lax">{order.item3_name}</td>
                        <td class="tg-0lax">{order.item3_quantity}</td>
                        <td class="tg-0lax">{order.orderStatus}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default OrderDetails