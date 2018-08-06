import React from "react";
export default function AddAndRemoveBtn(props){
    return <button className="button" onClick={()=>props.addToCart(props.product)} >
        Add to cart({
        (props.cartItem && props.cartItem.quantity) || 0
        })
    </button>
}