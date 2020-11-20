import React from "react"
import {Link} from "react-router-dom"

const OrderMenu = () => <>
<nav>
    <ol>
        <li><Link to = '/address'>address</Link></li>
        <li><Link to= '/basket'>basket</Link></li>
        <li><Link to = '/completed'>comeplete</Link></li>
        <li><Link to = '/payment'>payment</Link></li>
    </ol>
</nav>
</>

export default OrderMenu


