import React, { Component } from "react";
import { connect } from "react-redux";
import {NavLink} from "react-router-dom";
import "./UserToolBar.css";
import UserToggleDrawer from "./UserToggleDrawer";
import UserProfile from "./UserProfile";

// import {sum} from "../CartSum/CartSum";
// console.log(sum())


class UserToolBar extends Component {
  constructor(props){
    super(props)
  

  this.state = {
    isSignedIn: false,
    cartTotal:"",
    deduxCart: this.props.cart
  
  }
}
  componentDidMount = () =>{
    // console.log(this.state.deduxCart)
      const allCartsTotal = [];
      if(Array.isArray(this.state.deduxCart) || this.state.deduxCart.length){

        this.state.deduxCart.forEach(item => {
        const itemTotal = item.quantity * item.price.$numberDecimal
        allCartsTotal.push(itemTotal)
      });
      const totalSum = allCartsTotal.reduce((a, b) => a + b, 0)
      // console.log(totalSum)
      this.setState({
        cartTotal:totalSum.toFixed(2)
      })
    }

  }
  render() {
    return (
      <header className="toolBar">
        <nav className="toolBar-navigation">
          <div className="toolBar-logo"><a href="/login">Assime-228</a></div>
          <div className="spacer"></div>
          <div className="toolBar-links">
            <ul>  
              <li>
                <div><NavLink to="/" style={{textDecoration:"none"}}>User's Name</NavLink>
                </div>
              </li>
              <li>
                <div>
                   <UserProfile/>
                </div>
              </li>
              <li><NavLink to="/">Home</NavLink></li>
              <li>< NavLink to="/inventory">Admin</NavLink></li> 
              <li>
                <NavLink to="/cart">
                  <div className="cart">
                    <img src="http://www.oceaneagleeye.com/images/marketplace.png"
                    alt="Shopping Cart"
                    style={{ height: "80%", width: "70px" }}
                    />
                    <p style={{position:"relative", bottom:"10px", top:"0.5px"}}>Cart: {`$${this.state.cartTotal}`}</p>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div> 
          <div className="toolBar-toggle-button">
            <UserToggleDrawer click={this.props.drawerClickHandler}/>
          </div>
        </nav>
      </header>
    )
  }
}


function mapStateToProps(state){
  return{
      cart:state.cart
  }
}


function mapDispatchToProps(dispatch){
  return{
    getAllCarts:(item) =>{
          dispatch({type: "GET_All_CARTS", payload:item})
      }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserToolBar)
