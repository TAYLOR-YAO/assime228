import React from "react";
import {Switch, Route} from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import ShoppingCart from "../CartPage";
import Receiving from "../Managment/Receiving";
const Router =()=>(
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/cart" component={ShoppingCart}/>        
        <Route exact path="/receiving" component={Receiving}/>        
    </Switch>
)

export default Router;