import React from "react";
import AddToCartBtn from "./AddToCartBtn";
import RemoveBtn from "./RemoveBtn";
import ItemDetails from "./ItemDetails";

export default function ProductListItem(props){
    return<div style={{margin:"10px 10px"}} className="progucts">
        <div className="copmpany-name-wrapper" value={props.company} name={props.company} onClick={props.displayComoanyArticles}>
            <h4>{props.company}</h4>
        </div>

        <div className="item-image-wrapper">
            <img src={props.image} alt="prodict View"/>
        </div>
        <div className="item-infos">
            <h6>{props.name}</h6>
            <ItemDetails details={props.details}/>
            <h4>${props.price}</h4>
        </div>
        <div className="addToCart">
            <AddToCartBtn 
            cartItem ={props.cartItem}
            product={props.product}
            addToCart ={props.addToCart}/>

            {
                props.cartItem
                ? <RemoveBtn 
                cartItem ={props.cartItem}
                product={props.product}
                removeFromCart ={props.removeFromCart}/>
                : null
            }
            
            
        </div>
    </div>

}