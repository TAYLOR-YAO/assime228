import React, {Component } from "react";
import {Navbar} from "react-bootstrap";
import "./PorductName.css";
 class PorductName extends Component{
    constructor(props){
        super(props);
        
    }
    
    render(){
        return(
            <div>
                <Navbar.Header>
                    <Navbar.Brand>
                    <div>{this.props.name}</div>
                    </Navbar.Brand>
                </Navbar.Header>
            </div>
        )
    }
}
export default PorductName;