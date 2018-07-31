import React from "react";
import "./SideDrawer.css";


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
            <li><a href="/">Home</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/receiving">Receiving</a></li>            
            <li><a href="/"><div >
              Log Out</div></a></li>                     
        </ul>
    </nav>
    );
};
export default SideDrawer