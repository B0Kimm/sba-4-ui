import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {BoardCreate, BoardDelete, BoardMenu, BoardRead, BoardUpdate} from "../components/Board"

const Board = () => <>
    <Router>
        <BoardMenu/>
        <Switch>
            <Route path='/create' component={BoardCreate}></Route>
            <Route path='/read' component={BoardRead}></Route>
            <Route path='/update' component={BoardUpdate}></Route>
            <Route path='/delete' component={BoardDelete}></Route>    
                    
        </Switch>
    </Router>

</>
export default Board
