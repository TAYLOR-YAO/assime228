import React, {Component} from 'react';
import "./StoreRegistration.css";
import Confirmation from "./Confirmation";    
import {Grid, Cell, Textfield,Button} from "react-mdl";
import axios from "axios";
class StoreRegistration extends Component {
    state={
        showModal: false,
        company: "",
        country: "",
        email: "",
        tel: "",
        city: "",
        address: "",
        storeColor: "",
        textColor: "",
        storeID: "",
        deleteStoreId: ""
    }
    handleClose = event => {
        this.setState({ showModal: false });
    }

    ClearStore = event =>{
        const {deleteStoreId} = this.state;
        const data = {
            id: deleteStoreId
        }
        axios.post("api/clearstore",data).then(result=>{
            console.log("Result: ",result)
        });
    }

    ClearAllInventory = event =>{
        axios.delete("api/clearallproducts").then(result=>{
        });
    }

    ClearStoreInventory = event =>{
        const {deleteStoreId} = this.state;
        const data = {
            id: deleteStoreId
        }
    axios.post("api/clearstoreproducts",data).then(result=>{
    });
}
    handleInputsChanges = event => {
        const { target: { name, value } } = event;
        this.setState({ [name]: value });
    }

    handleSignUpSubmit = event => {
        event.preventDefault();
        axios.post("api/registration",this.state).then(res=>{
            this.setState({
                company: res.data.company,
                city: res.data.city,
                country: res.data.country,
                email: res.data.email,
                tel: res.data.tel,
                address: res.data.address,
                storeID: res.data._id,
                showModal: true
            })
        }); 
    }

    render () {
       const  {showModal, company, city, country, email, tel, address, storeID} = this.state;
       if(showModal){
           return   <Confirmation
                company = {company}
                location = {`${city}, ${country}`}
                email = {email}
                tel = {tel}
                address = {address}
                storeID = {storeID}
            />
       }
    return(
        <div style={{marginTop:"100px"}}>
            <div className="marchandises-box" style={{width: '80%', margin: 'auto'}}>
                <Grid className="demo-grid-1">
                    <Cell col={6}>
                        <div style={{textAlign:"center"}}><h3>Store ragistration</h3></div>    
                        <hr style={{ height:"3px", background:"#000"}}/>                              
                        <Grid className="demo-grid-1">
                            <Cell col={4}>
                                <h6>Company & Store Name</h6>
                                <Textfield
                                label="Company & Store"
                                floatingLabel
                                style={{width: "100%"}}
                                name="company"
                                onChange={this.handleInputsChanges}
                                />
                            </Cell>

                            <Cell col={4}>
                                <h6>City</h6>
                                <Textfield
                                label="city"
                                floatingLabel
                                style={{width: '100%'}}
                                name="city"
                                onChange={this.handleInputsChanges}
                                />
                            </Cell>

                            <Cell col={4}>
                                <h6>Country</h6>
                                <Textfield
                                label="country"
                                floatingLabel
                                style={{width: '100%'}}
                                name="country"
                                onChange={this.handleInputsChanges}
                                />
                            </Cell>
                        </Grid>
                        <Grid className="demo-grid-1">
                            
                            <Cell col={4}>
                                <h6>Email</h6>
                                <Textfield
                                label="Email"
                                floatingLabel
                                style={{width: '100%'}}
                                name="email"
                                onChange={this.handleInputsChanges}
                                />
                            </Cell>
                            <Cell col={4}>
                                <h6>Tel</h6>
                                <Textfield
                                label="Tel"
                                floatingLabel
                                style={{width: '100%'}}
                                name="tel"
                                onChange={this.handleInputsChanges}
                                />
                            </Cell>
                            <Cell col={4}>
                                <h6>Address</h6>
                                <Textfield
                                label="Address"
                                floatingLabel
                                style={{width: "100%"}}
                                name="address"
                                onChange={this.handleInputsChanges}
                                />
                            </Cell>

                        </Grid>


                        <Grid className="demo-grid-1">
                            <Cell col={4}>
                                <h6>Store Color</h6>
                                <Textfield
                                label="Store background color"
                                floatingLabel
                                style={{width: "100%"}}
                                name="storeColor"
                                onChange={this.handleInputsChanges}
                                />
                            </Cell>

                            <Cell col={4}>
                                <h6>Text Color</h6>
                                <Textfield
                                label=" Store text color"
                                floatingLabel
                                style={{width: '100%'}}
                                name="textColor"
                                onChange={this.handleInputsChanges}
                                />
                            </Cell>
                        </Grid>
                        <Button raised style={{background:"#6351ce", color:"#fff"}} onClick={this.handleSignUpSubmit}>Submit</Button>
                    </Cell> 
                    <Cell col={6}  style={{borderLeft:"5px double #333", padding:" 0px 20px"}}>
                        <div style={{textAlign:"center"}}><h3>Updates</h3></div>                
                        <hr style={{ height:"3px", background:"#000"}}/>
                        <Grid>
                            <Cell col={12}>
                                <h6>Delete store products</h6>  
                                <hr/> 
                                <Textfield
                                    label="Insert store ID"
                                    floatingLabel
                                    style={{width: "100%"}}
                                    name="deleteStoreId"
                                    onChange={this.handleInputsChanges}
                                />                  
                                <Button raised style={{background:"#6351ce", color:"#fff"}} onClick={this.ClearStoreInventory}>Delete products</Button>
                                <Button raised style={{background:"#6351ce", color:"#fff", marginLeft:"20px"}} onClick={this.ClearStore}>Delete Store ?</Button>
                                
                            </Cell>
                        </Grid>
                        <hr style={{ height:"3px", background:"#000"}}/>
                        <Grid>
                            <Cell col={12}>
                                <h6>Delete all products</h6>
                                <hr/>
                                <Button raised style={{background:"#6351ce", color:"#fff", margin:"10px 20px"}} onClick={this.ClearAllInventory}>Delete</Button>                    
                            </Cell>
                        </Grid>
                    
                    </Cell>             
                </Grid>
            </div>
        </div>
        )
    }
}
export default StoreRegistration;