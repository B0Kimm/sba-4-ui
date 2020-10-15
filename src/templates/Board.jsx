import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {BoardMenu as Menu} from "../components"
// import {BoardCreate, BoardDelete, BoardMenu, BoardRead, BoardUpdate} from "./Board"

const Board = ({children}) => <>
    <h1>board</h1>
    <Menu/>
    {children}

</>
export default Board
