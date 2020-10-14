import React from "react"
import {Link} from "react-router-dom"


const BoardMenu = () => <>
<nav>
    <ol>
        <li><Link to='board/create'>create</Link></li>
        <li><Link to='board/read'>read</Link></li>
        <li><Link to='board/update'>Update</Link></li>
        <li><Link to='board/delete'>delete</Link></li>
    </ol>
</nav>
</>

export default BoardMenu
