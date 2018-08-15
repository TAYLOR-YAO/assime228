import React,{Component} from "react";
import axios from "axios";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import {Row, Col} from "react-bootstrap";
import Select from 'react-select';
import AdminNavbar from "../../AdminToolBar";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import "./OrderReview.css";


class OrderReview extends Component{
    constructor(props){
        super(props)
        this.state = {
            companyOption: null,
            orders:[],
            companies:[],
            productsValue:"",
            generalInventory:"both companies",
            id:"",
            qty:""
        }
    }

    componentDidMount = ()=>{
        axios.get("api/orders").then(response=>{
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

            const ordersValue =[]
            response.data.map(item=>
                ordersValue.push(item.quantity * item.price.$numberDecimal)
            )
            this.interval = setInterval(() => 
                this.setState(
                    {
                        orders: response.data,
                        companies: companies,
                        productsValue: ordersValue.reduce((a, b) => a + b, 0).toFixed(2)
                    }
            ), 100);
        });
        
    }
    // componentWillUnmount() {
    //     clearInterval(this.interval);
    //   }

    handleCompanyChange = (companyOption) => {
        this.setState({ 
            selectedOption: companyOption,
            generalInventory: companyOption.value
        });
        axios.get('api/ordersbycompany', {
        params: {
            company: companyOption.value
        }
        })
        .then(response => {
            const ordersValue =[]
            response.data.map(item=>
                ordersValue.push(item.quantity * item.price.$numberDecimal)
            );
            this.setState({
                orders: response.data,
                productsValue: ordersValue.reduce((a, b) => a + b, 0).toFixed(2)
            });
        }).catch(err => {
            console.log(`Error: ${err}`)
        });
    }

    handleCheck(event) {
        const item = JSON.parse(event.currentTarget.dataset.item);
         axios.post("api/sells", item).then(response=>{
            console.log(response.data)
        }).catch(err=>{
            console.log(err.message)
        })
    }

    render(){
        return(<div>
            <AdminNavbar/>
            <div style={{textAlign:"center"}}><h3>Order Review</h3> </div>
            <div className="container">
                <h5>{`All orders from ${this.state.generalInventory}`}</h5>
                <Select
                    placeholder={"Select by Company"}
                    value={this.state.companyOption}
                    onChange={this.handleCompanyChange}
                    options={this.state.companies}
                />
                <h1>{this.generalInventory}</h1>
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
                            <Th>Update Inventory</Th>                            
                        </Tr>
                    </Thead>
                    <Tbody>
                        { this.state.orders.map(product=>(
                            <Tr key={product._id}>
                                <Td>{product.name}</Td>
                                <Td>{product.company}</Td>
                                <Td>{product.brand}</Td>                
                                <Td>{product.details}</Td>
                                <Td>{product.category}</Td>
                                <Td>{product.type}</Td>
                                <Td>{product.quantity}</Td>
                                <Td>{product.price.$numberDecimal}</Td>
                                <Td className="both-price">{(product.price.$numberDecimal * product.quantity).toFixed(2)}</Td>
                                <Td><button onClick={this.handleCheck.bind(this)} data-item={JSON.stringify(product)} data-id={product._id}  data-quantity={product.quantity} >Update</button></Td>
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

export default OrderReview;
