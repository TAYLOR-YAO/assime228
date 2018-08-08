import React from "react";
import {Switch, Route} from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import ShoppingCart from "../ShopperCarts";
import Receiving from "../Managment/Receiving/Receiving";
import Iventory from "../Managment/Inventory";
const Router =()=>(
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/cart" component={ShoppingCart}/>        
        <Route exact path="/receiving" component={Receiving}/>
        <Route exact path="/inventory" component={Iventory}/>       
               
    </Switch>
)

export default Router;