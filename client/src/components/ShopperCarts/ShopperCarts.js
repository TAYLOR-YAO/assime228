import React from "react";
import {Grid,Cell} from "react-mdl";
import Cart from "../features/CartPage/Cart";
import UserNavbar from "../UserNavBar";

export default function CartPage(props){
    return <duv>
        <UserNavbar/>
        <div style={{width: '80%', margin: 'auto'}}>
            <Grid className="demo-grid-1">
                <Cell col={12}>
                    <h3>MY Cart</h3>
                    <Cart/>
                </Cell>
                
            </Grid>
        </div>
    </duv>
        
}