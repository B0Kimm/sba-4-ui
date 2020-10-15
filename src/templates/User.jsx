import React, { Children } from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {UserMenu as Menu} from "../components"
//import {UserLogin, UserMenu, UserRegister, UserRemove,UserUpdate} from "../components"

const User = ({children}) => <>
    <h1>user</h1>
    <Menu/>
    {children}

</>
export default User

// {} 객체로 전달해야 함 => 객체지향  Javascript에서는 json이 객체지향 표기법
// 함수를 전달 => 함수형
/// (L)compoenet -> template -> container(s)
// menu 고정 = const
// sub-menu 변동 = variable
// children -부모자식 관계를 설정해서 입체 다층 구조를 만듬
// <>는 import 한 UI / 데이터는 {}
















// const User = () => <>
//     <Router>
//         <UserMenu/>
//         <Switch>
//             <Route path='/login' component={UserLogin}></Route>
//             <Route path='/register' component={UserRegister}></Route>
//             <Route path='/update' component={UserUpdate}></Route>
//             <Route path='/remove' component={UserRemove}></Route>    
                    
//         </Switch>
//     </Router>

// </>
// export default User

