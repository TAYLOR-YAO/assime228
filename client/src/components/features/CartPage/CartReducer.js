
const cartWithoutItem =(cart, item) => cart.filter(cartItem =>cartItem._id !== item._id);
const itemInCart = (cart, item) =>cart.filter(cartItem => cartItem._id === item._id)[0];
const addToCart = (cart, item) =>{
    const cartItem = itemInCart(cart, item);
    return cartItem === undefined 
    ? [ ...cartWithoutItem(cart, item), {...item, quantity: 1}]
    : [ ...cartWithoutItem(cart, item), {...cartItem, quantity: cartItem.quantity + 1}]
}

const removeFromCart = (cart, item) =>{
    return item.quantity === 1
    ? [...cartWithoutItem(cart, item)]
    : [...cartWithoutItem(cart, item), {...item, quantity: item.quantity - 1}]
}

const removeAllFromCart = (cart, item) =>{
    return [...cartWithoutItem(cart, item)]
}


const getAllCarts = (cart) =>{
    return cart
    ? [...cartWithoutItem(cart)]
    : [...cartWithoutItem(cart)]
}

const CartReducer = (state=[], action) => {
    switch(action.type){
        case "ADD":
        return addToCart(state, action.payload)
        case "REMOVE":
        return removeFromCart(state, action.payload)
        case "REMOVE_All":
        return removeAllFromCart(state, action.payload)
        case "GET_All_CARTS":
        return getAllCarts(state, action.payload)
        default:
        return state
    }
}

export default CartReducer;