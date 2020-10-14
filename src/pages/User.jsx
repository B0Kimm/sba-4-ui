import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {UserLogin, UserMenu, UserRegister, UserRemove,UserUpdate} from "../components/User"

const User = () => <>
    <Router>
        <UserMenu/>
        <Switch>
            <Route path='/login' component={UserLogin}></Route>
            <Route path='/register' component={UserRegister}></Route>
            <Route path='/update' component={UserUpdate}></Route>
            <Route path='/remove' component={UserRemove}></Route>    
                    
        </Switch>
    </Router>

</>
export default User
