import React, { Component } from "react";
import AdminToolBar from "../AdminToolBar";
import AdminSideDrawer from ".././AdminToolBar/AdminSideDrawer";
import AdminBackDrop from ".././AdminToolBar/AdminBackDrop";


class AdminNavbar extends Component {
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
      backDrop = <AdminBackDrop click={this.backDropHandler}/>;
    } 
    return (
      <div >

        <AdminToolBar drawerClickHandler={this.drawerTogglerHandler}/>
        <AdminSideDrawer show={this.state.sideDrawerOpen}/>
        {backDrop}
    </div>
    );
  }
}

export default  AdminNavbar;