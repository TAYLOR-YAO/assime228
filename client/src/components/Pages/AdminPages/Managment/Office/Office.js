import React, {Component} from "react";
import {Tab, Tabs, Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import "./Office.css";
import AdminHome from "../OfficeHome";
import Inventory from "../Inventory";
import OrderReview from "../OrderReview";
import Sells from "../Sells";
import Receiving from "../Receiving";
import LayoutView from "../LayoutView";

const valide = localStorage.getItem("identifiedSore");
function valideted(){
    if(valide){
       return JSON.parse(valide);
    } else {
        return ""
    }
}

class Office extends Component{
    CloseDashboad = event =>{
        event.preventDefault();
        localStorage.removeItem("identifiedSore");
        return window.location.reload()
    }
    render(){
        return(
            <div className="office">
                <div className="admin-navigator" style={{background:`${valideted().storeColor ? valideted().storeColor : "white"}`, color:`${valideted().textColor ? valideted().textColor : "white"}`}}>
                    <div>
                        <div className="brand-holder" >
                            <h3>
                                <span ><NavLink style={{textDecoration:"none", color:`${valideted().textColor ? valideted().textColor : "#fff"}`}} to="/">Dashboard</NavLink></span>
                                <span style={{marginLeft:"100px"}}>||</span> 
                                <span style={{marginLeft:"100px"}}><NavLink style={{textDecoration:"none", color:`${valideted().textColor}`}} to="office">{valideted().company}</NavLink></span>
                            </h3>
                        </div>
                        
                        <div className="close-session">
                            <Button className="close-sessionBtn" onClick={this.CloseDashboad} >Lock!</Button>
                        </div>
                    </div>
                </div>
               <Tabs justified defaultActiveKey={1} animation={false} id="noanim-tab-example">
                    <Tab eventKey={1} title="Office" >
                        <AdminHome/>
                    </Tab>
                    <Tab eventKey={2} title="Order review">
                        <OrderReview/>
                    </Tab>
                    <Tab eventKey={3} title="Sells" >
                        <Sells/>
                    </Tab>
                    <Tab eventKey={4} title="Inventory" >
                        <Inventory/>
                    </Tab>
                    <Tab eventKey={5} title="Receiving" >
                        <Receiving/>
                    </Tab>
                    <Tab eventKey={6} title="Layout view" >
                        <LayoutView/>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default Office;