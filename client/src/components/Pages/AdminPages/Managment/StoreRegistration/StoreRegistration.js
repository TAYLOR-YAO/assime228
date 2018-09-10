import React, {Component} from 'react';
import "./StoreRegistration.css";
import Confirmation from "./Confirmation";    
import {Grid, Cell, Textfield,Button} from "react-mdl";
import axios from "axios";
class StoreRegistration extends Component {
    state={
        showModal: false,
        company:"",
        country:"",
        email:"",
        tel: "",
        city:"",
        address:"",
        storeColor:"",
        textColor:"",
        storeID:""
    }
    handleClose = event => {
        this.setState({ showModal: false });
      }
    
    // handleShow() {
    // this.setState({ showModal: true });
    // }

    handleInputsChanges = event => {
        const { target: { name, value } } = event;
        this.setState({ [name]: value });
        // console.log(event.target.value)
    }

    handleSignUpSubmit = event => {
        event.preventDefault();
        // console.log(this.state)
        axios.post("api/registration",this.state).then(res=>{
            console.log("Store: ",res.data)
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
            console.log(this.state.storeID)
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
            <div style={{textAlign:"center"}}><h3>Store ragistration</h3></div>
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
            <Button raised style={{background:"maroon", color:"#fff"}} onClick={this.handleSignUpSubmit}>Submit</Button>
                
        </div>
        {/* <Confirmation
        storeID={this.state.storeID}
        /> */}
    </div>
    )
    }
}
export default StoreRegistration;