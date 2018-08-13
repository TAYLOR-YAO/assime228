import React from "react";
import {IconButton, Menu, MenuItem} from "react-mdl";
import {NavLink} from "react-router-dom";
import "./UserProfile.css";
const UserProfile = props =>(
    <div style={{position: 'relative'}}>
        <NavLink to="/"><IconButton name="more_vert" id="demo-menu-lower-right" onClick={props.logout}/> <span className="logout-text">Log out!</span></NavLink>
        <div>
        <Menu target="demo-menu-lower-right" align="right" style={{display:"flex", flexColum:"flex-colum"}}>
            <MenuItem>Profile</MenuItem>
            <MenuItem >Edit Profile</MenuItem>
        </Menu>
        </div>
    </div>


)

export default UserProfile;