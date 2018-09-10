import React, {Component} from "react";
import {Tab, Tabs} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import "./Office.css";
import AdminHome from "../OfficeHome";
import Inventory from "../Inventory";
import OrderReview from "../OrderReview";
import Sells from "../Sells";
import Receiving from "../Receiving";
const valide = localStorage.getItem("identifiedSore");
function valideted(){
    if(valide){
       return JSON.parse(valide);
    } else {
        return ""
    }
}

class Office extends Component{
    render(){
        return(
            <div className="office">
                <div className="admin-navigator" style={{background:`${valideted().storeColor}`, color:`${valideted().textColor}`}}>
                    <div>
                        <h3>
                            <span ><NavLink style={{textDecoration:"none", color:`${valideted().textColor}`}} to="/">Dashboard</NavLink></span>
                            <span style={{marginLeft:"100px"}}>||</span> 
                            <span style={{marginLeft:"100px"}}><NavLink style={{textDecoration:"none", color:`${valideted().textColor}`}} to="office">{valideted().company}</NavLink></span>
                        </h3>
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
                    <Tab eventKey={6} title="Rayout view" >
                        <h1>Layout</h1>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default Office;