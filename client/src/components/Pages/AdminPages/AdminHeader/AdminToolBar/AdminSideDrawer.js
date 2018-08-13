import React from "react";
import "./AdminSideDrawer.css";
import {NavLink} from "react-router-dom";
import firebase from "firebase";
import initialized from "../../../../Privates/FirebaseAuth";


const AdminSideDrawer = props =>{
    let drawerClass ="side-drawer";
    if(props.show){
        drawerClass = "side-drawer open";
    }
    return(
    <nav className={drawerClass} >
        <div><h2>ASIIME-228</h2></div>
        <hr/>
        <ul>
            <li><NavLink to="/sells">Sells</NavLink></li>         
            <li><NavLink to="/orders">Order Review</NavLink></li> 
            <li>< NavLink to="/inventory">Inventory</NavLink></li> 
            <li><NavLink to="/receiving">Receiving</NavLink></li>
            <li>
                <NavLink to="/" onClick={()=> firebase.auth().signOut()}>
                    <div >Close Session!</div>
                </NavLink>
            </li>                                                      
        </ul>
    </nav>
    );
};
export default AdminSideDrawer