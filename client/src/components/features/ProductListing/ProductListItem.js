import React from "react";
import AddToCartBtn from "./AddToCartBtn";
import RemoveBtn from "./RemoveBtn";
import ItemDetails from "./ItemDetails";

export default function ProductListItem(props){
    return<div style={{margin:"10px 10px"}} className="progucts">
        <div className="copmpany-name-wrapper" style={{background:`${props.storeColor}`, color:`${props.textColor}`}} data-attribute={props.company} name={props.company}  value={props.company} onClick={props.displayComoanyArticles}>
            <p>Store:</p>
            <h5>{props.company}</h5>
        </div>

        <div className="item-image-wrapper">
            <img src={props.image} alt="prodict View"/>
        </div>
        <div className="item-infos">
            <h6>{props.name}</h6>
            <ItemDetails details={props.details}/>
            <h5>${props.price}</h5>
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