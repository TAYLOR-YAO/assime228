import React, { Component } from "react";

import {NavLink} from "react-router-dom";
import "./AdminToolBar.css";
import AdminToggleDrawer from "./AdminToggleDrawer";
import UserProfile from "./UserProfile";



class AdminToolBar extends Component {
  constructor(props){
    super(props)
  

  this.state = {
    isSignedIn: false,
    cartTotal:"",
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
              <li>< NavLink to="/receiving">Receiving</NavLink></li> 
              <li>< NavLink to="/inventory">Inventory</NavLink></li> 
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
            <AdminToggleDrawer click={this.props.drawerClickHandler}/>
          </div>
        </nav>
        
      </header>
    )
  }
}
export default AdminToolBar;