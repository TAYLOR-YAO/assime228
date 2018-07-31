import React, { Component } from "react";
import "./Navbar.css";
import ToggleDrawer from "./ToggleDrawer";
import StoreCathegories from "./StoreCathegories";

class Navbar extends Component {

  state = {
    isSignedIn: false,
    localStorageName: "",
    userProfilePicture: "",
    userDisplayName: "",
    userID: "",
  
  }
 
  render() {
    return (
      <header className="toolBar">
        <nav className="toolBar-navigation">
          <div className="toolBar-logo"><a href="/login">Assime-228</a></div>
          <div className="spacer"><StoreCathegories/></div>
          <div className="toolBar-links">
            <ul>  
              <li>
                <div>
                  <img src="http://peterboroughtakenote.com/wp-content/uploads/2015/11/blank-profile-picture-973461_1280-1024x1024.png"
                    alt="Profile View" style={{ height: "50px", width: "50px" }}/>
                </div>
              </li>
              <li>
                <a href="/">
                  <div>
                    Log Out
                  </div>
                </a>
              </li>
              <li><a href="/">Home</a></li>
              <li><a href="/receiving">Receiving</a></li> 
              <li>
                <a href="/cart">
                  <div className="cart">
                    <img src="https://cdn4.iconfinder.com/data/icons/adiante-apps-app-templates-incos-in-grey/512/app_type_shop_512px_GREY.png"
                    alt="Shopping Cart"
                    style={{ height: "80%", width: "70px" }}
                    />
                    <p style={{position:"relative", bottom:"10px", left:"20px"}}>Cart</p>
                  </div>
                </a>
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