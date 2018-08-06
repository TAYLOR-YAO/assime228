import React from "react";
import "./SideDrawer.css";
import {NavLink} from "react-router-dom";


const SideDrawer = props =>{
    let drawerClass ="side-drawer";
    if(props.show){
        drawerClass = "side-drawer open";
    }
    return(
    <nav className={drawerClass} >
        <div><h2>ASIIME-228</h2></div>
        <hr/>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/cart">Cart</NavLink></li>
            <li><NavLink to="/receiving">Receiving</NavLink></li>            
            <li><NavLink to="/"><div >
              Log Out</div></NavLink></li>                     
        </ul>
    </nav>
    );
};
export default SideDrawer