import React,{Component} from "react";
import axios from "axios";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import {Row, Col} from "react-bootstrap";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import "./Sells.css";
const valide = localStorage.getItem("identifiedSore");
function valideted(){
    if(valide){
       return JSON.parse(valide);
    } else {
        return ""
    }
}

class Sells extends Component{
    constructor(props){
        super(props)
        this.state = {
            companyOption: null,
            orders:[],
            companies:[],
            productsValue:"",
            generalInventory:"both companies",
        }
    }

    componentDidMount (){
        // this.interval = setInterval(() =>{
            axios.get(`api/getsells/?storeId=${valideted()._id}`).then(response=>{                      
                const ordersValue =[]
                response.data.map(item=>
                    ordersValue.push(item.quantity * item.price.$numberDecimal)
                );
                this.setState({
                    orders: response.data,
                    productsValue: ordersValue.reduce((a, b) => a + b, 0).toFixed(2)
                });
            });
        // });  
    }

    // componentWillMount (){
    //     clearInterval(this.interval)
    // }
    
    render(){
        return(<div>
            <div style={{textAlign:"center"}}><h3>Items sold</h3> </div>
            <div className="container">
                <h5>{`All Sols By ${this.state.generalInventory}`}</h5>
                <h1>{this.generalInventory}</h1>
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
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Item Name</Th>
                            <Th>Brand</Th>                                    
                            <Th>Qty</Th>            
                            <Th>Unit price</Th>
                            <Th>Both price</Th>                          
                        </Tr>
                    </Thead>
                    <Tbody>
                        { this.state.orders.map(product=>(
                            <Tr key={product._id}>
                                <Td>{product.name}</Td>
                                <Td>{product.brand}</Td>                
                                <Td>{product.quantity}</Td>
                                <Td>{product.price.$numberDecimal}</Td>
                                <Td className="both-price">{(product.price.$numberDecimal * product.quantity).toFixed(2)}</Td>
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

export default Sells;