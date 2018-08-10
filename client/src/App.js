import React, { Component } from 'react';
// import Navbar from "./components/Navbar";
// import SideDrawer from "./components/Navbar/SideDrawer";
// import BackDrop from "./components/Navbar/BackDrop";
// import Navbar from "./components/NavBar";
import Router from "./components/Router/Router";
class App extends Component {
  // state={
  //   sideDrawerOpen:false
  // }
  // drawerTogglerHandler = ()=>{
  //   this.setState((previosState)=>{
  //     return {sideDrawerOpen: !previosState.sideDrawerOpen};
  //   })
   
  //  }
   
  // backDropHandler = ()=>{
  //   this.setState({sideDrawerOpen:false})
  // }
  render() {
    // let backDrop;
    // if(this.state.sideDrawerOpen){
    //   backDrop = <BackDrop click={this.backDropHandler}/>;
    // } 
    return (
      <div className="App">

        {/* <Navbar drawerClickHandler={this.drawerTogglerHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backDrop} */}
        {/* <Navbar/> */}
        <Router/>  
    </div>
    );
  }
}

export default App;
