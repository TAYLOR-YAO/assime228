import React from "react";
import {Grid,Cell} from "react-mdl";
import Cart from "../features/CartPage/Cart";
export default function CartPage(props){

    return <div style={{width: '80%', margin: 'auto'}}>
    <Grid className="demo-grid-1">
        <Cell col={12}>
            <h2>MY Cart</h2>

            <Cart/>
        </Cell>
        
    </Grid>
    </div>
        
}