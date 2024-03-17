import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

    return (
        <body><header>
        <div className = "container">
            <Link to = "/">
            <h1>ElectriGen</h1>
            </Link>
        </div>
    </header>
    <nav>
    <ul>
        <li><a href="#">Dashboard</a></li>
        <li><a href="OrderForm">Order Placement</a></li>
        <li><a href="OrderHistory">Order History</a></li>
        <li><a href="#">Order Detail Reports</a></li>
    </ul>
</nav></body>
        
    )
}

export default Navbar