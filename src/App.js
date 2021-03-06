import React from "react"
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import {Nav} from "./components"
import {Home, Board, User, Items} from "./templates"
import {UserLogin, UserRegister, UserRemove, UserUpdate} from "./container/User"

const App = () => (<>
    <Router>
        <Nav/>
        <Switch>
            <Route path='/home' component={Home}></Route>
            <Redirect exact from ={'/'} to ={'/home'}/>
            <Route exact path='/user' component={User}></Route>
            <Route path='./login' compoenet={UserLogin}></Route>
            <Route path='./register' compoenet={UserRegister}></Route>
            <Route path='./remove' compoenet={UserRemove}></Route>
            <Route path='./update' compoenet={UserUpdate}></Route>
            <Route exact path='/board' component={Board}></Route>
            <Route exact path='/items' component={Items}></Route>
            {/* <Redirect from={'./login'} to={'./user/login'}/>
            <Redirect from={'./register'} to={'./user/register'}/>
            <Redirect from={'./remove'} to={'./user/remove'}/>
            <Redirect from={'./update'} to={'./user/update'}/> */}
            
        </Switch>
    </Router>
</>)



export default App
