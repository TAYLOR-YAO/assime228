import React from "react";
import {connect} from "react-redux";
// import axios from "axios";
import PorductName from "../../../CartProducts/PorductName";
import Subtotal from "../../../CartProducts/Subtotal/Subtotal";
import PickUpSavings from "../../../CartProducts/PickUpSavings/PickUpSavings";
// import TaxeFeeds from "../../../CartProducts/TaxeFeeds/TaxeFeeds";
import EstimatedTotal from "../../../CartProducts/EstimatedTotal/EstimatedTotal";
import ItemDetails from "../../../CartProducts/ItemDetails/ItemDetails";
import ItemHandler from "../../../CartProducts/ItemHandler/ItemHandler";
import "./Cart.css";
const savings = -3.85;
const totalCartValue =[];
let cartSum;



function sort(item){
    return item.sort((a, b)=> a._id < b._id)
}

function Cart(props){
    if(sort(props.cart).length > 0){

        sort(props.cart).forEach(item => {
            totalCartValue.push(item.price.$numberDecimal * item.quantity)
        });
        cartSum = totalCartValue.reduce((a, b) => a + b, 0).toFixed(2);

        
    }

    
    return <div style={{textAlign:"center"}}>
            <h4>Cart Total: {cartSum}</h4>
            <table style={{textAlign:"left"}} className="table">
            <thead>
                <tr>
                <th style={{padding:"0 10px"}}>Item</th>
                <th style={{padding:"0 10px"}}>Qantity</th>
                <th style={{padding:"0 10px"}}>Company</th>
                <th style={{padding:"0 10px"}}>Unitary price</th>
                <th style={{padding:"0 10px"}}>Total price</th>                                         
                <th style={{padding:"0 10px"}}>Add qty</th>
                <th style={{padding:"0 10px"}}>Reduce qty</th>
                <th style={{padding:"0 10px"}}>Remove All</th>                                                                                                                                                               
                </tr>
            </thead>
            <tbody className=" table-body">
                {
                    sort(props.cart).map(item=><tr key={item._id} className="table-body-row">
                        <td style={{padding:"0 10px"}}>{item.name}</td>
                        <td style={{padding:"0 10px"}}>{item.quantity}</td>
                        <td style={{padding:"0 10px"}}>{item.company}</td>
                        <td style={{padding:"0 10px"}}>${item.price.$numberDecimal}</td>
                        <td style={{padding:"0 10px"}}>${item.price.$numberDecimal * item.quantity}</td>                                                            
                        <td style={{padding:"0 10px"}}>
                            <button onClick={()=> props.addToCart(item)}>+</button>
                        </td>
                        <td style={{padding:"0 10px"}}>
                            <button onClick={()=> props.removeFromCart(item)}>-</button>
                        </td>
                        <td style={{padding:"0 10px"}}>
                        <button onClick={()=> props.removeAllFromCart(item)}>All</button>
                        </td>                    
                    </tr>)
                }
            </tbody>
        </table>
        <div className="item-wrapper">
            {
                sort(props.cart).map(item=><div key={item._id}>
                    <div className="item-card">
                        <div style={{textAlign:"center"}}><h5>All details</h5></div>
                        <hr/>
                        <ItemHandler
                            addToCart = {()=> props.addToCart(item)}
                            removeFromCart = {()=> props.removeFromCart(item)}
                            removeAllFromCart = {()=> props.removeAllFromCart(item)}
                        />
                        <hr/>
                        <PorductName
                        name={item.name}
                        />
                        <Subtotal price={item.price.$numberDecimal}/>
                        <PickUpSavings price={`${savings}`}/>
                        {/* <TaxeFeeds taxes={0.00}/> */}
                        <hr/>
                        <EstimatedTotal 
                            price={(item.price.$numberDecimal * item.quantity).toFixed(2)}
                            quantity={item.quantity}
                        />
                        <ItemDetails
                        price={item.price.$numberDecimal}
                        image={item.image}
                        quantity={item.quantity}
                        />
                    </div>
                </div>
                )
            }
            
        </div>
        {<div>
            <h1> {totalCartValue}</h1>
        </div>}
    </div>
}

function mapStateToProps(state){
    return{
        cart:state.cart
    }
}


function mapDispatchToProps(dispatch){
    return{
        addToCart:(item) =>{
            dispatch({type: "ADD", payload:item})
        },
        removeFromCart:(item) =>{
            dispatch({type: "REMOVE", payload:item})
        },
        removeAllFromCart:(item) =>{
            dispatch({type: "REMOVE_All", payload:item})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)