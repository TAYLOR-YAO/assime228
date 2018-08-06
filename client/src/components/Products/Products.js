import React from "react";
import "./Products.css"
export default function Cart(props){
    return <div style={{margin:"10px 10px"}} className="progucts">
        <div className="copmpany-name-wrapper" ata-attribute={props.company} name={props.company} onClick={props.displayComoanyArticles}>
            <h4>{props.company}</h4>
        </div>

        <div className="item-image-wrapper">
            <img src="http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Black-T-Shirt-PNG-Transparent-Image-500x491.png" alt="prodict View"/>
        </div>
        <div className="item-infos">
            <h6>{props.name}</h6>
            <p>{props.details}</p>
            <h4>${props.price}</h4>
        </div>
        <div className="addToCart">
        <button>Add to cart</button>
        </div>
    </div>

}