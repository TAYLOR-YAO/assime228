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
      <header className="admin-toolBar">
        <nav className="toolBar-navigation">
          <div className="toolBar-logo"><a href="/inventory">Assime-228</a></div>
          <div className="adminName"><h4><span style={{color:"#fff"}}>||</span><a href="/inventory" className="adminName"> Admin</a></h4></div>
          <div className="spacer"></div>
          <div className="toolBar-links">
            <ul>  
              <li>
              </li>
              <li><NavLink to="/sells">Sells</NavLink></li>
              <li><NavLink to="/orders">Ourder review</NavLink></li>
              <li>< NavLink to="/receiving">Receiving</NavLink></li> 
              <li>< NavLink to="/inventory">Inventory</NavLink></li> 
              <li>
                <UserProfile/>
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