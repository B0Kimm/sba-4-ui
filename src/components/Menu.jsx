import React from "react"
import {BrowserRouter, Route, Switch, Link} from "react-router-dom"

export const UserMenu = () => 
<nav>
    <ol>
        <li><Link to='/login'>login</Link></li>
        <li><Link to='/register'>sign up</Link></li>
        <li><Link to='/update'>update info</Link></li>
        <li><Link to='/review'>review info</Link></li>
    </ol>
</nav>


export const BoardMenu = () =>
<nav>
    <ol>
        <li><Link to='/board-create'>Home</Link></li>
        <li><Link to='/board-read'>Board</Link></li>
        <li><Link to='/board-update'>Items</Link></li>
        <li><Link to='/board-delete'>User</Link></li>
    </ol>
</nav>



const ItemMenu = () =>
<nav>
    <ol>
        <li><Link to='/items-create'>Home</Link></li>
        <li><Link to='/items-read'>Board</Link></li>
        <li><Link to='/items-update'>Items</Link></li>
        <li><Link to='/items-delete'>User</Link></li>
    </ol>
</nav>




// <> 생략 가능 => 이미 nav에서 묶여있음/ context가 이미 정의 됨
// default 안하면 head에 export