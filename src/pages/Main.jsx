import React from "react"
// 구조 분해 = 필요한 것만 가져옴
import {About, Contact, Events, Home, Products, Error, OrderPay, OrderComplete} from '../components' //{}는 객체 components
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom'

const Main = () => <>
        <BrowserRouter>
            <div className="main">
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Redirect from ={"/history"} to={"/about/history"}/>
                    <Redirect from ={"/services"} to={"/about/services"}/>
                    <Redirect from ={"/location"} to={"/about/location"}/>
                    <Route path="/contact" component={Contact}></Route>
                    <Route path="/events" component={Events}></Route>
                    <Route path="/orderpay" component={OrderPay}></Route>
                    {/* <Route path="/ordercomplete" component={OrderComplete}></Route> */}
                    <Route path="/products" component={Products}></Route>
                    <Route path="/" component={Products}></Route>
                    <Route component={Error}/>
                    {/* alt + shift + lower arrow 복사/붙여넣기 
                    path가 없으면 Error로 이동
                    redirect(하위 구조)*/}
                </Switch>

            </div>

        </BrowserRouter>
    </>


export default Main
