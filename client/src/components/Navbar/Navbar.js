import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import "./Navbar.css";
import ToggleDrawer from "./ToggleDrawer";
import UserProfile from "./UserProfile";

class Navbar extends Component {

  state = {
    isSignedIn: false,
  
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
                    <p style={{position:"relative", bottom:"10px", left:"20px"}}>Cart</p>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div> 
          <div className="toolBar-toggle-button">
            <ToggleDrawer click={this.props.drawerClickHandler}/>
          </div>
        </nav>
        
      </header>
    )
  }
}

export default Navbar;