import React from "react";
import {Switch, Route} from "react-router-dom";
import StoreRegistration from "../Pages/AdminPages/Managment/StoreRegistration";
import Login from "../Pages/UserPages/Login";
import Home from "../Pages/UserPages/HomePages";
import ShoppingCart from "../Pages/UserPages/ShopperCarts";
import Office from "../Pages/AdminPages/Managment/Office";
import Checkout from "../features/Checkout";
const Router =()=>(
    <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/registration" component={StoreRegistration}/>                        
        <Route exact path="/cart" component={ShoppingCart}/>        
        <Route exact path="/office" component={Office}/>
        <Route exact path="/checkout" component={Checkout}/>       
    </Switch>
)

export default Router;