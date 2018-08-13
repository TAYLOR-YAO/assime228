import React from "react";
import "./UserBackDrop.css"
const Backdrop = props =>(
    <div className="backdrop" onClick={props.click}/>
)
export default Backdrop;