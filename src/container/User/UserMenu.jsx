import React from "react"
import {Link} from "react-router-dom"


const UserMenu = () => <>
<nav>
    <ol>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li>
        <li><Link to='/update'>Update</Link></li>
        <li><Link to='/remove'>Remove</Link></li>
    </ol>
</nav>
</>

export default UserMenu
