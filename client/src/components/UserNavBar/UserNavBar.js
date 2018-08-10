import React, { Component } from "react";
import UserToolBar from "../UserToolBar";
import UserSideDrawer from ".././UserToolBar/UserSideDrawer";
import UserBackDrop from ".././UserToolBar/UserBackDrop";

class UserNavbar extends Component {
    state={
        sideDrawerOpen:false
      }
      drawerTogglerHandler = ()=>{
        this.setState((previosState)=>{
          return {sideDrawerOpen: !previosState.sideDrawerOpen};
        })
       
       }
       
      backDropHandler = ()=>{
        this.setState({sideDrawerOpen:false})
      }

render() {
    let backDrop;
    if(this.state.sideDrawerOpen){
      backDrop = <UserBackDrop click={this.backDropHandler}/>;
    } 
    return (
      <div >
        <UserToolBar drawerClickHandler={this.drawerTogglerHandler}/>
        <UserSideDrawer show={this.state.sideDrawerOpen}/>
        {backDrop}
    </div>
    );
  }
}

export default  UserNavbar;