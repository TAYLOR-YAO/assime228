import React, {Component} from 'react';
import "./Receiving.css";    
import UserNavbar from "../../Admin/AdminNavBar";
import {Grid, Cell, Textfield,Button} from "react-mdl";
import axios from "axios";
class Receiving extends Component {
    state={
        name:"",
        image:"",
        price:"",
        both:"",
        sku:"",
        details:"",
        category:"",
        company:"",
        brand:"",
        type:"",
        color:"",
        storeColor:"",
        textColor:""
    }

    handleInputsChanges = event => {
        const { target: { name, value } } = event;
        this.setState({ [name]: value });
        // console.log(event.target.value)
    }

    handleSignUpSubmit = event => {
        event.preventDefault();
        console.log(this.state)
        axios.post("api/addinventory",this.state).then(items=>{
            console.log(items)
        }); 
    }



    render () {
    return(
        <div>
        <UserNavbar/>
    <div className="marchandises-box" style={{width: '80%', margin: 'auto'}}>
        <div style={{textAlign:"center"}}><h3>Add Inventory</h3></div>
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
                <h6>Brand</h6>
                <Textfield
                label="Brand"
                floatingLabel
                style={{width: '100%'}}
                name="brand"
                onChange={this.handleInputsChanges}
                />
            </Cell>
            <Cell col={4}>
                <h6>Categoty</h6>
                <Textfield
                label="category"
                floatingLabel
                style={{width: '100%'}}
                name="category"
                onChange={this.handleInputsChanges}
                />
            </Cell>
        </Grid>


             <Grid className="demo-grid-1">
            <Cell col={4}>
                <h6>Store Color</h6>
                <Textfield
                label="Store Color"
                floatingLabel
                style={{width: "100%"}}
                name="storeColor"
                onChange={this.handleInputsChanges}
                />
            </Cell>

            <Cell col={4}>
                <h6>Text Color</h6>
                <Textfield
                label="Text Color"
                floatingLabel
                style={{width: '100%'}}
                name="textColor"
                onChange={this.handleInputsChanges}
                />
            </Cell>
        </Grid>



        <Grid className="demo-grid-1">
            <Cell col={3}>
                <h6>Item Name</h6>
                <Textfield
                label="Item Name"
                floatingLabel
                style={{width: '100%'}}
                name="name"
                onChange={this.handleInputsChanges}
                />
            </Cell>
            <Cell col={3}>
                <h6>Item Type</h6>
                <Textfield
                label="Item Type"
                floatingLabel
                style={{width: '100%'}}
                name="type"
                onChange={this.handleInputsChanges}
                />
            </Cell>
            <Cell col={3}>
                <h6>Iteme Price</h6>
                <Textfield
                label="Iteme Price"
                floatingLabel
                style={{width: '100%'}}
                name="price"
                onChange={this.handleInputsChanges}
                />
            </Cell>
            
            <Cell col={3}>
                <h6>Iteme Image</h6>
                <Textfield
                label="Iteme Image Url"
                floatingLabel
                style={{width: '100%'}}
                name="image"
                onChange={this.handleInputsChanges}
                />
            </Cell>
            
        </Grid>

        <Grid>
            <Cell col={6}>
                <h6>Item Details</h6>
                <Textfield
                    label="Item Details"
                    floatingLabel
                    style={{width: '100%'}}
                    name="details"
                    onChange={this.handleInputsChanges}
                />
            </Cell>
            <Cell col={3}>
                <h6>Item Color</h6>
                <Textfield
                    label="Item Color"
                    floatingLabel
                    style={{width: '100%'}}
                    name="color"
                    onChange={this.handleInputsChanges}
                />
            </Cell>

            {/* <Cell col={3}>
                <h6>SKU</h6>
                <Textfield
                label="Iteme Item SKU"
                floatingLabel
                style={{width: '100%'}}
                name="sku"
                onChange={this.handleInputsChanges}
                />
            </Cell> */}

            <Cell col={3}>
                <h6>Both</h6>
                <Textfield
                    label="Both"
                    floatingLabel
                    style={{width: '100%'}}
                    name="both"
                    onChange={this.handleInputsChanges}
                />
            </Cell>

        </Grid>
        <Button raised style={{background:"maroon", color:"#fff"}} onClick={this.handleSignUpSubmit}>Submit</Button>
            
    </div>
    </div>
    )
    }
}
export default Receiving;