import React, { Component } from "react";
import firebase from "firebase";
import initialized from "../../../Privates/FirebaseAuth";
import { connect } from "react-redux";
import {NavLink} from "react-router-dom";
import "./UserToolBar.css";
import UserToggleDrawer from "./UserToggleDrawer";
import UserProfile from "./UserProfile";

class UserToolBar extends Component {
  constructor(props){
    super(props)

    this.state = {
      isLogedIn: false,
      cartTotal:this.props.sum,
      deduxCart: this.props.sum,
      username:firebase.auth().currentUser.displayName
    }
}

componentDidMount() {
  this.interval = setInterval(() => this.setState({ 
    cartTotal: this.props.sum
   })
    , 100);
}
componentWillUnmount() {
  clearInterval(this.interval);
}

  render() {
    return (
      <header className="toolBar">
        <nav className="toolBar-navigation">
          <div className="toolBar-logo"><a href="/">Assime-228</a></div>
          <div className="usernameLayout">
                  <NavLink to="/" ><h6 >Happy shopping, {this.state.username} </h6></NavLink>
          </div>
          <div className="spacer"></div>
          
          <div className="toolBar-links">
            <ul>  
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/cart">Cart</NavLink></li>
              <li>
                <div>
                   <UserProfile
                   logout={()=> firebase.auth().signOut()}
                   />
                </div>
              </li>
              <li>
                <NavLink to="/cart">
                  <div className="cart">
                    <p style={{position:"relative", bottom:"10px", top:"0.5px"}}>{`$${this.state.cartTotal}`}</p>
                    <img src="http://www.oceaneagleeye.com/images/marketplace.png"
                    alt="Shopping Cart"
                    style={{ height: "60%", width: "50px",position:"relative", bottom:"20px"}}
                    />
                    <p style={{position:"relative", bottom:"30px", left:"10px"}}>Cart</p>
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
      sum:state.cart.map(item=> item.price.$numberDecimal * item.quantity).reduce((a, b) => a + b, 0).toFixed(2)
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
