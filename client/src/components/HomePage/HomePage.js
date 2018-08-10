import React, {Component} from "react";
import {Grid,Cell} from "react-mdl";
import Select from 'react-select';
import axios from "axios";
import "./HomePage.css";
import ProductLinsting from "../features/ProductListing";
import UserNavbar from "../UserNavBar";

class HomePage extends Component {
    state={
        typeOption: null,
        categoryOption: null,
        companyOption: null,
        company:"",
        products:[],
        categories:[],
        companies:[],
        types:[]
    }
    componentDidMount = ()=>{
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
                    categories: categories,
                    companies: companies,
                    types: types
                }
            )
            // console.log(this.state)   
        })
    }

    // ================Shop By type =========================
    handleTypeChange = (typeOption) => {
        this.setState({ selectedOption: typeOption});
        axios.get('api/displaytypeitems/', {
            params: {
              type: typeOption.value
            }
          })
          .then(response => {
            this.setState({products: response.data})
          }).catch(err => {
            console.log(`Error: ${err}`)
          });
    }

    // =============== Visite specific Store ================
    handleCompanyChange = (companyOption) => {
        this.setState({ selectedOption:companyOption});
        axios.get('api/displaystoreitems/', {
            params: {
              company: companyOption.value
            }
          })
          .then(response => {
            this.setState({products: response.data})
          }).catch(err => {
            console.log(`Error: ${err}`)
          });
    }
    // =============== Shop by Category ================    
    handleCategoryChange = (categoryOption) => {
        this.setState({ selectedOption: categoryOption});
        console.log(categoryOption.value);
        axios.get('api/displaycategoryitems/', {
            params: {
              category: categoryOption.value
            }
          })
          .then(response => {
            console.log(response.data)
            this.setState({products: response.data})
          }).catch(err => {
            console.log(`Error: ${err}`)
          });
         
    }

    // filtrerProdicts = () => {
  
    // }

    render(){
        return(
            <div>
                <UserNavbar/>
            <Grid className="demo-grid-1" >
                <Cell col={2}>
                    <div className="asside">
                        <hr/>
                        <h5>Shop by type</h5>
                        <Select
                            placeholder={"Search Item"}
                            value={this.state.typeOption}
                            onChange={this.handleTypeChange}
                            options={this.state.types}
                        />
                        <hr/>
                        <h5>Shop By Categories</h5>
                        <Select
                            placeholder={"Search by category"}
                            value={this.state.categoryOption}
                            onChange={this.handleCategoryChange}
                            options={this.state.categories}
                        />
                        <hr/>
                        <h5>Select company</h5>
                        <Select
                             placeholder={"Select by Company"}
                            value={this.state.companyOption}
                            onChange={this.handleCompanyChange}
                            options={this.state.companies}
                        />
                    </div>
                </Cell>
                <Cell col={10}>
                    <Grid>
                        <Cell col={12}>
                            <div className="product-wrapper">
                                <ProductLinsting 
                                    products ={this.state.products}
                                    displayComoanyArticles={this.displayComoanyArticles}
                                />
                            </div>
                        </Cell>
                    </Grid>
                </Cell>
            </Grid>
            </div>
        )
    }
}
export default HomePage;



