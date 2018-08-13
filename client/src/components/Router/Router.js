import React from "react";
import {Switch, Route} from "react-router-dom";
import Login from "../Pages/UserPages/Login";
import Sells from "../Pages/AdminPages/Managment/Sells";
import ShoppingCart from "../Pages/UserPages/ShopperCarts";
import Receiving from "../Pages/AdminPages/Managment/Receiving";
import Iventory from "../Pages/AdminPages/Managment/Inventory";
import OrderReview from "../Pages/AdminPages/Managment/OrderReview";

const Router =()=>(
    <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/cart" component={ShoppingCart}/>        
        <Route exact path="/receiving" component={Receiving}/>
        <Route exact path="/inventory" component={Iventory}/>
        <Route exact path="/orders" component={OrderReview}/>
        <Route exact path="/sells" component={Sells}/>       

    </Switch>
)

export default Router;