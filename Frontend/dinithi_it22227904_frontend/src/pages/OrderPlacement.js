import {useEffect, useState} from 'react'

//components
import OrderDetails from '../components/OrderDetails.js'
import OrderForm from '../components/OrderForm.js'

const OrderPlace = () => {
    const [orders,setOrders] = useState(null)

    //fetching method implementation
    useEffect(() => {
        const fetchOrders = async () => {
            const response = await fetch('/api/orders')
            const json = await response.json()

            if(response.ok){
                setOrders(json)
            }
        }

        //method calling
        fetchOrders()  
    }, [])


    return (
        <div className="OrderPlace">
            <div className = "orders">
                {orders && orders.map((order) => (
                    <OrderDetails key = {order._id} order={order}/>
                ))}
            </div>
            <OrderForm/>
        </div>
    )
}

export default OrderPlace