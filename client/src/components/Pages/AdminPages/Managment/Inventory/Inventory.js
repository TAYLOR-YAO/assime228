import React,{Component} from "react";
import axios from "axios";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import {Row, Col} from "react-bootstrap";
import Select from 'react-select';
import AdminNavBar from "../../AdminHeader/AdminNavBar";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import "./Inventory.css";

class Iventory extends Component{
    constructor(props){
        super(props)
        this.state = {
            companyOption: null,
            products:[],
            companies:[],
            productsValue:"",
            generalInventory:"entire Products",
           
        }
        
    }
    componentDidMount = ()=>{
        axios.get("api/products").then(response=>{
            const companies = [];
            response.data.forEach(res => {
                companies.push({
                    label: res.company,
                    value:res.company
                });
            });
            companies.reduceRight((acc, obj, i) => {
                acc[obj.label]? companies.splice(i, 1) : acc[obj.label] = true;
                return acc;
            }, Object.create(null));

            this.setState(
                {
                    products: response.data,
                    companies: companies
                }
            )
            this.getProductTotalValue()
        });
        
    }

    getProductTotalValue = ()=>{
        const storeValue = this.state.products.map(product=>{
            return product.price.$numberDecimal * product.both
        })
        console.log("INV :", storeValue)
        this.setState({productsValue:storeValue.reduce((a, b) => a + b, 0).toFixed(2)})
    }

    handleCompanyChange = (companyOption) => {
        this.setState({ 
            selectedOption: companyOption,
            generalInventory: companyOption.value
        });
        axios.get('api/displaystoreitems/', {
        params: {
            company: companyOption.value
        }
        })
        .then(response => {
            const storeValue = response.data.map(product=>{
                return product.price.$numberDecimal * product.both
            });

            this.setState({
                products: response.data,
                productsValue: storeValue.reduce((a, b) => a + b, 0).toFixed(2)
            });

        }).catch(err => {
            console.log(`Error: ${err}`)
        });
    }

   

    render(){
        return(<div>
            <AdminNavBar/>

            <div style={{textAlign:"center"}}><h3>Inventory View</h3> </div>                                        
            <div className="container">
                <h5>{`All from ${this.state.generalInventory}`}</h5>
                <Select
                    placeholder={"Select by Company"}
                    value={this.state.companyOption}
                    onChange={this.handleCompanyChange}
                    options={this.state.companies}
                />
                <h1>{this.generalInventory}</h1>
                <Row className="show-grid" style={{marginBottom:"20px"}}>
                    <Col md={6} >
                    <div className="productsvalue">
                    Total Value:
                    </div>                    
                    </Col>
                    <Col md={6}>
                        <div className="productsvalue" style={{textAlign:"right", textDecoration:"underline", fontFamily:"Impact"}}>
                        {`$${this.state.productsValue}`}
                        </div>
                    </Col>
                </Row>
                <Table>
                    <Thead>
                        <Tr >
                            <Th>Item Name</Th>
                            <Th>Company</Th>
                            <Th>Brand</Th>                                    
                            <Th>Details</Th>
                            <Th>Category</Th>
                            <Th>Type</Th>
                            <Th>Qty</Th>            
                            <Th>Unit price</Th>
                            <Th>Both price</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        { this.state.products.map(product=>(
                            <Tr key={product._id} data-id>
                                <Td>{product.name}</Td>
                                <Td>{product.company}</Td>
                                <Td>{product.brand}</Td>                
                                <Td>{product.details}</Td>
                                <Td>{product.category}</Td>
                                <Td>{product.type}</Td>
                                <Td>{product.both}</Td>
                                <Td>{product.price.$numberDecimal}</Td>
                                <Td className="both-price">{product.price.$numberDecimal * product.both}</Td>                             
                            </Tr>
                        ))
                        }
                    </Tbody>
                </Table>
                
            </div>
        </div>            
        )
    }
}

export default Iventory;
