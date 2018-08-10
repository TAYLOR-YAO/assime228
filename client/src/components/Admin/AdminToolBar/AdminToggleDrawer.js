import React from "react";
import "./AdminToggleDrawer.css"
const AdminToggleDrawer = props =>(
    <button className="toggle-btn" onClick={props.click}>
        <div className="toggle-btn-line"/>
        <div className="toggle-btn-line"/>
        <div className="toggle-btn-line"/>
    </button>
);
export default AdminToggleDrawer;