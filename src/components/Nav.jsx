import React from "react"
import {Link} from "react-router-dom"

const Nav = () => <>
<nav>
    <ol>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/board'>Board</Link></li>
        <li><Link to='/items'>Items</Link></li>
        <li><Link to='/user'>User</Link></li>
    </ol>
</nav>


</>

export default Nav

//routing (연결하는 것)
//ol order list; numbering  nav>ol>li*4 + tab
// 내장 함수는 '' (string 값)