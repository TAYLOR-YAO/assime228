import React from "react";
import AddToCartBtn from "./AddToCartBtn";
import RemoveBtn from "./RemoveBtn";
import ItemDetails from "./ItemDetails";
import "./ProductListItem.css";

export default function ProductListItem(props){
    return  <div className="productCard">
            <div style={{background:`${props.storeColor}`, color:`${props.textColor}`}}>{props.company}</div>
            <div className="imagebox">
                <img src={props.image} alt="prodict View"/> 
            </div>
            <div>
                <p >{props.name}</p>
                <p style={{color:"red"}} className="item-information">${props.price}</p>
                <ItemDetails details={props.details}/>
            </div> 
                <div className="addToCart">
                <AddToCartBtn 
                cartItem ={props.cartItem}
                product={props.product}
                addToCart ={props.addToCart}
                storeColor={props.storeColor}
                textColor={props.textColor}
                />

                {
                    props.cartItem
                    ? <RemoveBtn 
                    cartItem ={props.cartItem}
                    product={props.product}
                    removeFromCart ={props.removeFromCart}
                    storeColor={props.storeColor}
                    textColor={props.textColor}
                    />
                    : null
                }
            
            </div>  
        </div>
    }