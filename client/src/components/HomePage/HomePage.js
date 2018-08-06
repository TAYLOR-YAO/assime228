import React, {Component} from "react";
import {Grid,Cell} from "react-mdl";
import Select from 'react-select';
import axios from "axios";
import "./HomePage.css"
import ProductLinsting from "../features/ProductListing";

class HomePage extends Component {
    state={
        selectedOption: null,
        company:"",
        cart:[],
        categories:[],
        companies:[]
    }
    componentDidMount = ()=>{
        axios.get("api/displayitems").then(response=>{
            console.log(response.data)

            const categories = [];
            const companies = [];

            response.data.forEach(res => {
                categories.push({
                    label: res.category,
                    value:res.category
                });
                companies.push({
                    label: res.company,
                    value:res.company
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

            this.setState(
                {
                    cart: response.data.sort(function() { return 0.5 - Math.random() }),
                    categories: categories,
                    companies: companies
                }
            )
            console.log("=========================")
            console.log(this.state)
            // console.log(this.state.company)
            
            
        })
        
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(selectedOption.value);
    }

    displayComoanyArticles = event => {
        event.preventDefault();
        console.log(event.target.value)
        console.log(event.target.getAttribute('data-attribute'))
        this.setState({ company: event.target.getAttribute('data-attribute') });
        axios.get("api/displaystoreitems",{data:{company:"TayConnection"}}).then(response=>{
            console.log(response)
        })
      
        
    }


    render(){
        return(
            <Grid className="demo-grid-1" >
                <Cell col={2}>
                    <div className="asside">
                        <hr/>
                        <h5>Shop By Categories</h5>
                        <Select
                            value={this.state.selectedOption}
                            onChange={this.handleChange}
                            options={this.state.categories}
                        />
                        <hr/>
                        <h5>Select company</h5>
                        
                        <Select
                            value={this.state.selectedOption}
                            onChange={this.handleChange}
                            options={this.state.companies}
                        />
                    </div>
                </Cell>
                <Cell col={10}>
                    <Grid>
                        <Cell col={12}>
                            <div className="product-wrapper">
                                <ProductLinsting 
                                    products ={this.state.cart}
                                    displayComoanyArticles={this.displayComoanyArticles}
                                />
                            </div>
                        </Cell>
                    </Grid>
                </Cell>
            </Grid>
        )
    }
}
export default HomePage;



