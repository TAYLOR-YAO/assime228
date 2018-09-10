import React from "react";
import "./SideDrawer.css";
import firebase from "firebase";
import initialized from "../../../Privates/FirebaseAuth";

const SideDrawer = props =>{
    let drawerClass ="side-drawer";
    if(props.show){
        drawerClass = "side-drawer open";
    }
    return(
    <nav className={drawerClass} >
        <div style={{color:"#fff"}}><h2>Assime-228</h2></div>
        <hr/>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/cart">Cart</a></li>
            <li>
                <div onClick={() =>{ firebase.auth().signOut()}} >Log Out</div>
              </li>                     
        </ul>
    </nav>
    );
};
export default SideDrawer