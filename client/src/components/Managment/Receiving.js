import React, {Component} from 'react';
import {Grid, Cell, Textfield,Button} from "react-mdl";
import axios from "axios";
class Receiving extends Component {
    state={
        name:"",
        image:"",
        price:"",
        details:"",
        category:"",
        company:""
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
        })
        
}



    render () {
    return(
    <div style={{width: '80%', margin: 'auto'}}>
        <div style={{textAlign:"center"}}><h3>Add Inventory</h3></div>
        <Grid className="demo-grid-1">
            <Cell col={6}>
                <h6>Company Name</h6>
                <Textfield
                onChange={() => {}}
                label="Company"
                floatingLabel
                style={{width: "100%"}}
                name="company"
                onChange={this.handleInputsChanges}
                />
            </Cell>

            <Cell col={6}>
                <h6>Item Categoty</h6>
                <Textfield
                onChange={() => {}}
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
                <h6>Item Name</h6>
                <Textfield
                onChange={() => {}}
                label="Item Name"
                floatingLabel
                style={{width: '100%'}}
                name="name"
                onChange={this.handleInputsChanges}
                />
            </Cell>
            <Cell col={4}>
                <h6>Iteme Price</h6>
                <Textfield
                onChange={() => {}}
                label="Iteme Price"
                floatingLabel
                style={{width: '100%'}}
                name="price"
                onChange={this.handleInputsChanges}
                />
            </Cell>
            
            <Cell col={4}>
                <h6>Iteme Image</h6>
                <Textfield
                onChange={() => {}}
                label="Iteme Image Url"
                floatingLabel
                style={{width: '100%'}}
                name="image"
                onChange={this.handleInputsChanges}
                />
            </Cell>
            
        </Grid>

        <Grid>
            <Cell col={8}>
                <h6>Item Details</h6>
                <Textfield
                    onChange={() => {}}
                    label="Item Details"
                    floatingLabel
                    style={{width: '100%'}}
                    name="details"
                    onChange={this.handleInputsChanges}
                />
            </Cell>

        </Grid>
        <Button raised style={{background:"maroon", color:"#fff"}} onClick={this.handleSignUpSubmit}>Submit</Button>
            
    </div>
    )
    }
}
export default Receiving;