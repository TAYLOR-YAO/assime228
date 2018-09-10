import React,{Component} from "react";
import axios from "axios";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import {Row, Col} from "react-bootstrap";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import "./OrderReview.css";
const valide = localStorage.getItem("identifiedSore");
function valideted(){
    if(valide){
       return JSON.parse(valide);
    } else {
        return ""
    }
}

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

    componentDidMount (){
        this.interval = setInterval(() =>{
            axios.get(`api/orders/?storeId=${valideted()._id}`).then(response=>{      
                const ordersValue =[]
                response.data.map(item=>
                    ordersValue.push(item.quantity * item.price.$numberDecimal)
                )
                this.setState({
                    orders: response.data,
                    productsValue: ordersValue.reduce((a, b) => a + b, 0).toFixed(2)
                });
            });
        });
        
    }
    componentWillMount (){
        clearInterval(this.interval)
    }

    handleCheck(event) {
        event.preventDefault();
        const item = JSON.parse(event.currentTarget.dataset.item);
        axios.post("api/sells", item).then(response=>{
        }).catch(err=>{
            console.log(err.message)
        })
    }

    render(){
        return(<div>
            <div style={{textAlign:"center"}}><h3>Order Review</h3> </div>
            <div className="container">
                <h5>{`All orders from ${this.state.generalInventory}`}</h5>
                <h1>{this.generalInventory}</h1>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Item Name</Th>
                            <Th>Brand</Th>                                    
                            <Th>Color</Th>
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
                                <Td>{product.brand}</Td>                
                                <Td>{product.color}</Td>
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
