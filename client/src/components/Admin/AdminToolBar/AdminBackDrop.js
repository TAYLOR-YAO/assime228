import React from "react";
import "./AdminBackDrop.css"
const AdminBackdrop = props =>(
    <div className="backdrop" onClick={props.click}/>
)
export default AdminBackdrop;