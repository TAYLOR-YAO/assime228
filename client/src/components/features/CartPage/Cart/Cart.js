import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import {Row, Col} from "react-bootstrap";
import Checkout from "../../Checkout";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import PorductName from "../CartProducts/PorductName";
import Subtotal from "../CartProducts/Subtotal/Subtotal";
import PickUpSavings from "../CartProducts/PickUpSavings/PickUpSavings";
import TaxeFeeds from "../CartProducts/TaxeFeeds/TaxeFeeds";
import EstimatedTotal from "../CartProducts/EstimatedTotal/EstimatedTotal";
import ItemDetails from "../CartProducts/ItemDetails/ItemDetails";
import ItemHandler from "../CartProducts/ItemHandler/ItemHandler";
import TableView from './TableView/TableView';
import "./Cart.css";
const savings = -3.85;
const defaultSum = 0;
let cartSum;

function percentage(num)
{
  return (Math.round(num)/100)* 8.9;
}

function sortItemInCart(item){
    return item.sort((a, b)=> a._id < b._id)
}
function currentUser(){
    let userId = localStorage.getItem("currentUserId");
    return userId
}
function Cart(props){
    function processOrder(){
        const order = props.cart.map(item=> {
            item.customerID = currentUser();
            return item
        })
        axios.post("api/order", order).then(response=>{
            props.clearCarts(props.cart)
            // console.log("order is Presessed: ", response.data)
        }).catch(err=>{
            console.log("ERR: ",err.message)
        })
    }
    if(Array.isArray(props.cart) || props.cart.length){
        cartSum = props.cart.map(item=>{
            return item.price.$numberDecimal * item.quantity
        }).reduce((a, b) => a + b, 0).toFixed(2); 
    } else {
        cartSum = defaultSum.toFixed(2)
    }
    return <div style={{textAlign:"center"}}>
        <h4>Cart Total: {`$${cartSum}`}</h4>
        <div onClick={()=>processOrder()}>
            <Checkout/>
        </div>
        
        <div style={{marginTop:"-150px"}}>                
            <TableView
                tableView ={
                    <div className="table-data">
                    <Table>
                    <Thead>
                        <Tr>
                        <Th style={{padding:"0 10px"}}>Item</Th>
                        <Th style={{padding:"0 10px"}}>Qantity</Th>
                        <Th style={{padding:"0 10px"}}>Company</Th>
                        <Th style={{padding:"0 10px"}}>Unitary price</Th>
                        <Th style={{padding:"0 10px"}}>Total price</Th>                                         
                        <Th style={{padding:"0 10px"}}>Add qty</Th>
                        <Th style={{padding:"0 10px"}}>Reduce qty</Th>
                        <Th style={{padding:"0 10px"}}>Remove All</Th>                                                                                                                                                               
                        </Tr>
                    </Thead>
                    <Tbody className="item-card">
                    { sortItemInCart(props.cart).map(item=>(
                        <Tr key={item._id} className="table-body-row">
                        <Td style={{padding:"0 10px"}}>{item.name}</Td>
                        <Td style={{padding:"0 10px"}}>{item.quantity}</Td>
                        <Td style={{padding:"0 10px"}}>{item.company}</Td>
                        <Td style={{padding:"0 10px"}}>${item.price.$numberDecimal}</Td>
                        <Td style={{padding:"0 10px"}}>${item.price.$numberDecimal * item.quantity}</Td>                                                            
                        <Td style={{padding:"0 10px"}}>
                            <button onClick={()=> props.addToCart(item)}>+</button>
                        </Td>
                        <Td style={{padding:"0 10px"}}>
                            <button onClick={()=> props.removeFromCart(item)}>-</button>
                        </Td>
                        <Td style={{padding:"0 10px"}}>
                        <button onClick={()=> props.removeAllFromCart(item)}>All</button>
                        </Td>                    
                    </Tr>
                    ))
                    }
                    </Tbody>
                </Table>
                </div>
                }
            />
             
            <div className="item-wrapper">
                {
                    sortItemInCart(props.cart).map(item=><div key={item._id}>
                        <div className="order-item">
                            <div className="box">
                                <img className="item-photo" src={item.image} alt="Item"/>
                            </div>
                            <div className="box" id="sider">
                                <div className="view view-cascade gradient-card-header blue-gradient">
                                        <h6 className="card-header-title mb-3">{item.company}</h6>
                                        <div className="card-header-subtitle mb-0">
                                        <ItemHandler
                                            addToCart = {()=> props.addToCart(item)}
                                            removeFromCart = {()=> props.removeFromCart(item)}
                                            removeAllFromCart = {()=> props.removeAllFromCart(item)}
                                        />
                                        </div>
                                        <PorductName
                                        name={item.name}
                                        />

                                    </div>
                                    <div className="card-body card-body-cascade text-center">
                                        <Subtotal price={item.price.$numberDecimal}/>
                                        <TaxeFeeds
                                        taxes = {percentage(item.price.$numberDecimal * item.quantity).toFixed(2)}
                                        />
                                        <PickUpSavings price={`${savings}`}/>
                                        <ItemDetails
                                        price={item.price.$numberDecimal}
                                        image={item.image}
                                        quantity={item.quantity}
                                        />
                                        <hr/>
                                        
                                        <EstimatedTotal 
                                            noTaxes = {(item.price.$numberDecimal * item.quantity).toFixed(2)}
                                            price={(percentage(item.price.$numberDecimal * item.quantity) + (item.price.$numberDecimal * item.quantity)).toFixed(2)}
                                            quantity={item.quantity}
                                        />
                                    </div>                 
                                </div>
                            <hr/>                                                                                                                             
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
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
        },
        clearCarts:(item) =>{
            dispatch({type: "CLEAR_CARTS"})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
