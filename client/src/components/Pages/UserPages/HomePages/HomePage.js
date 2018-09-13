import React, {Component} from "react";
import {connect} from "react-redux";
import Select from 'react-select';
import axios from "axios";
import "./HomePage.css";
import ProductLinsting from "../../../features/ProductListing";
import Checkout from "../../../features/Checkout";

function currentUser(){
    let userId = localStorage.getItem("currentUserId");
    return userId
}



class HomePage extends Component {
    state={
        typeOption: null,
        categoryOption: null,
        companyOption: null,
        company:"",
        products:[],
        generalProducts:[],
        categories:[],
        companies:[],
        types:[]
    }
    
    //  processOrder = event =>{
    //     const order = this.props.cart.map(item=> {
    //         item.customerID = currentUser();
    //         return item
    //     })
    //     axios.post("api/order", order).then(response=>{
    //     }).catch(err=>{
    //         console.log("ERR: ",err.message)
    //     })
    // }

     componentDidMount (){
        axios.get("api/displayitems").then(response=>{
            const categories = [];
            const companies = [];
            const types = [];
            response.data.forEach(res => {
                categories.push({
                    label: res.category,
                    value:res.category
                });
                companies.push({
                    label: res.company,
                    value:res.company
                });
                types.push({
                    label: res.type,
                    value:res.type
                });
            });

            categories.reduceRight((acc, obj, i) => {
                acc[obj.label]? categories.splice(i, 1) : acc[obj.label] = true;
                return acc;
            }, Object.create(null));

            companies.reduceRight((acc, obj, i) => {
            acc[obj.label]? companies.splice(i, 1) : acc[obj.label] = true;
            return acc;
            }, Object.create(null));

            types.reduceRight((acc, obj, i) => {
                acc[obj.label]? types.splice(i, 1) : acc[obj.label] = true;
                return acc;
            }, Object.create(null));

            this.setState(
                {
                    products: response.data.sort(function() { return 0.5 - Math.random() }),
                    generalProducts: response.data,
                    categories: categories,
                    companies: companies,
                    types: types
                }
            ) 
        });
    }
    // ================Shop By type =========================
    handleTypeChange = (typeOption) => {
        this.setState({ selectedOption: typeOption});
        axios.get(`api/displaytypeitems/?type=${typeOption.value}`)
          .then(response => {
            this.setState({products: response.data})
          }).catch(err => {
            console.log(`Error: ${err}`)
          });
    }
    // =============== Visite specific Store ================
    handleCompanyChange = (companyOption) => {
        this.setState({ selectedOption:companyOption});
        axios.get(`api/displaystoreitems/?company=${companyOption.value}`)
          .then(response => {
            this.setState({products: response.data})
          }).catch(err => {
            console.log(`Error: ${err}`)
          });
    }
    // =============== Shop by Category ================    
    handleCategoryChange = (categoryOption) => {
        this.setState({ selectedOption: categoryOption});
        axios.get(`api/displaycategoryitems/?category=${categoryOption.value}`)
          .then(response => {
            this.setState({products: response.data})
          }).catch(err => {
            console.log(`Error: ${err}`)
          });
    }
    
    render(){
        return(
        <div style={{marginTop:"100px"}}>

                <div id="main">
                    <aside style={{textAlign:"center"}}>
                        {/* <div onClick={this.processOrder}> */}
                            <Checkout/>
                        {/* </div> */}
                       
                        <div className="searchBar">
                            <div>
                                <p style={{position:"relative", top:"10px"}}>Shop by Item</p>
                                <Select
                                    placeholder={"Search Item"}
                                    value={this.state.typeOption}
                                    onChange={this.handleTypeChange}
                                    options={this.state.types}
                                />
                            </div>
                            <div>
                                <p style={{position:"relative", top:"10px"}}>Shop By Categories</p>
                                <Select
                                    placeholder={"Search by category"}
                                    value={this.state.categoryOption}
                                    onChange={this.handleCategoryChange}
                                    options={this.state.categories}
                                />
                            </div>
                            <div>
                            <p style={{position:"relative", top:"10px"}}>Select company</p>
                                <Select
                                    placeholder={"Select by Company"}
                                    value={this.state.companyOption}
                                    onChange={this.handleCompanyChange}
                                    options={this.state.companies}
                                />
                            </div>
                        </div>
                    </aside>
                    <article>
                    <ProductLinsting 
                        products ={this.state.products}
                        displayComoanyArticles={this.displayComoanyArticles}
                    />
                    <ProductLinsting 
                        products ={this.state.generalProducts}
                        displayComoanyArticles={this.displayComoanyArticles}
                    />
                    </article>
                </div> 
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        cart:state.cart
    }
}
function mapDispatchToProps(dispatch){
    return{
        clearCarts:(item) =>{
            dispatch({type: "CLEAR_CARTS"})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);


