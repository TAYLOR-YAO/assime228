import React, {Component} from 'react';
import {Grid, Cell, Textfield,Button} from "react-mdl";
import axios from "axios";
import "./Receiving.css";
const valide = localStorage.getItem("identifiedSore");
function valideted(){
    if(valide){
       return JSON.parse(valide);
    } else {
        return ""
    }
}

class Receiving extends Component {
    state={
        company:    "",
        storeId:    "",
        storeColor: "",
        textColor: "",
        name: "",
        image: null,
        price:  "",
        both:   "",
        details:    "",
        category:   "",
        brand:  "",
        type:   "",
        color:  ""

    }
    componentDidMount = () =>{
        this.setState({
            company:valideted().company,
            storeId: valideted()._id,
            storeColor: valideted().storeColor,
            textColor: valideted().textColor,
        });
    }



    // handleImageChange = event => {
    //     event.preventDefault();        

    //     this.setState({
    //       image: URL.createObjectURL(event.target.files[0])
    //     });
    // }

    handleInputsChanges = event => {
        const { target: { name, value } } = event;
        this.setState({ [name]: value });
    }

    handleSignUpSubmit = event => {
        event.preventDefault();
        axios.post("api/addinventory",this.state).then(items=>{
        }).catch(err=>{
            console.log(err.message)
        });
    }

    render () {
    return(
        <div>
        <div className="marchandises-box" style={{width: '90%', margin: 'auto'}}>
            <div style={{textAlign:"center" }}><h3>Add products to Inventory</h3></div>
            <Grid className="demo-grid-1" >
                <Cell style={{border: "3px double #333", padding:"10px" , height:"450px", textAlign: "center"}}  col={3}>
                    <p style={{textAlign:"center"}}>Image Here</p>
                    <img className="product-image" src={this.state.image? this.state.image : "https://qph.fs.quoracdn.net/main-qimg-7af63b8ff4c09abcb9d4e385ef111db8"} alt="product"/>
                    <hr/>
                    <Grid className="previews">
                        <Cell col={8}>
                            <h6>Name:</h6>
                            <p style={{marginTop:"-10px"}}>{this.state.name}</p>
                        </Cell>
                        <Cell col={4}>
                            <h6>Price ($):</h6>
                            <p style={{marginTop:"-10px"}}>{this.state.price}</p>
                        </Cell>                    
                    </Grid>
                </Cell>
                <Cell col={9} style={{borderLeft:"5px solid #333"}}>
                    <Grid className="demo-grid-1">
                        <Cell col={3}>
                            <h6>Iteme Image</h6>
                            {/* <input type="file" onChange={this.handleImageChange}/> */}

                             <Textfield
                            label="Iteme Image Url"
                            floatingLabel
                            style={{width: '100%'}}
                            name="image"
                            onChange={this.handleInputsChanges}
                            />
                        </Cell> 
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
                        <Cell col={2}>
                            <h6>Iteme Price</h6>
                            <Textfield
                            label="Iteme Price"
                            floatingLabel
                            style={{width: '100%'}}
                            name="price"
                            onChange={this.handleInputsChanges}
                            />
                        </Cell>
                        <Cell col={2}>
                            <h6>Both</h6>
                            <Textfield
                                label="Both"
                                floatingLabel
                                style={{width: '100%'}}
                                name="both"
                                onChange={this.handleInputsChanges}
                            />
                        </Cell>
                        <Cell col={2}>
                            <h6>Item Color</h6>
                            <Textfield
                                label="Item Color"
                                floatingLabel
                                style={{width: '100%'}}
                                name="color"
                                onChange={this.handleInputsChanges}
                            />
                        </Cell>
                    </Grid>

                    <Grid>
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
                            <h6>Brand</h6>
                            <Textfield
                            label="Brand"
                            floatingLabel
                            style={{width: '100%'}}
                            name="brand"
                            onChange={this.handleInputsChanges}
                            />
                        </Cell>
                        <Cell col={3}>
                            <h6>Categoty</h6>
                            <Textfield
                            label="category"
                            floatingLabel
                            style={{width: '100%'}}
                            name="category"
                            onChange={this.handleInputsChanges}
                            />
                        </Cell>
                        <Cell col={3}>
                            <h6>Item Details</h6>
                            <Textfield
                                label="Item Details"
                                floatingLabel
                                style={{width: '100%'}}
                                name="details"
                                onChange={this.handleInputsChanges}
                            />
                        </Cell>
                    </Grid>
                    <Button className="receiving-submut" raised style={{background:`${valideted().storeColor}`, color:`${valideted().textColor}`}} onClick={this.handleSignUpSubmit}>Submit</Button>
                </Cell>
            </Grid>
        </div>
    </div>
    )
    }
}
export default Receiving;