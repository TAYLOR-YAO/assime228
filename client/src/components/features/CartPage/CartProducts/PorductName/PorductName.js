import React from "react";
import {Navbar} from "react-bootstrap";
import "./PorductName.css";

    
    
    export default function PorductName(props) {
        
return <div>
        <Navbar.Header>
            <Navbar.Brand>
            <div style={{textAlign:"center"}}>{props.name}</div>
            </Navbar.Brand>
        </Navbar.Header>
    </div>
}
