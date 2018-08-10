import React,{Component} from "react";
import axios from "axios";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import {Row, Col} from "react-bootstrap";
import Select from 'react-select';
import AdminNavBar from "../../Admin/AdminNavBar";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import "./Inventory.css";


class Iventory extends Component{
    state = {
        companyOption: null,
        products:[],
        companies:[],
        productsValue:""
        
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
            const storeValue = this.state.products.reduce((a, b) => +a + +b.price.$numberDecimal, 0);
            console.log(storeValue)
            this.setState({productsValue:storeValue.toFixed(2)})
        }
        

        handleCompanyChange = (companyOption) => {
            this.setState({ selectedOption:companyOption});
            axios.get('api/displaystoreitems/', {
            params: {
              company: companyOption.value
            }
            })
            .then(response => {
                const storeValue = response.data.reduce((a, b) => +a + +b.price.$numberDecimal, 0);
                console.log(storeValue)
          
                this.setState({
                    products: response.data,
                    productsValue:storeValue.toFixed(2)
                });


            }).catch(err => {
                console.log(`Error: ${err}`)
            });
    }

    render(){
        return(<div>
            <AdminNavBar/>            
            <div className="container">
                <hr/>
                <h5>Select company</h5>
                <Select
                    placeholder={"Select by Company"}
                    value={this.state.companyOption}
                    onChange={this.handleCompanyChange}
                    options={this.state.companies}
                />
                <h1>Table</h1>
                <Table>
                    <Thead>
                        <Tr>
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
                            <Tr key={product._id}>
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
                <Row className="show-grid">
                    <Col md={6} >
                    <div className="productsvalue">
                    Total Value:
                    </div>                    
                    </Col>
                    <Col md={6}>
                        <div className="productsvalue" style={{textAlign:"right", textDecoration:"underline", fontFamily:"Impact"}}>
                        {this.state.productsValue}
                        
                        </div>
                    </Col>
                </Row>
                
            </div>
        </div>            
        )
    }
}

export default Iventory;
