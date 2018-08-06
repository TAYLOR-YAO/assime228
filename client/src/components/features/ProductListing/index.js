import React from "react";
import ProductListItem from "./ProductListItem";
import { connect } from "react-redux";

function ProductListing(props){
    return<div className="product-wrapper">
        {
            props.products.map(product=>
            <div key={product._id}>
            <ProductListItem
                addToCart={props.addToCart}
                removeFromCart ={props.removeFromCart}
                cartItem={props.cart.filter(cartItem => cartItem._id === product._id)[0]}
                product={product}
                company={product.company}
                image={product.image}
                displayComoanyArticles={props.displayComoanyArticles}
                name={product.name}
                price={product.price.$numberDecimal}
                details={product.details}
                />
            </div>
            )

        }

    </div>
}

function mapStateToProps(state){
    return {
        cart:state.cart
    }
}

function mapDispatchToProps(dispatch){
    return{
        addToCart:(item)=>{
            dispatch({type:"ADD", payload:item})
        },
        removeFromCart:(item)=>{
            dispatch({type:"REMOVE", payload:item})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductListing)