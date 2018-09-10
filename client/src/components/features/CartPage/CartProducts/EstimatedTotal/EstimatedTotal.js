import React ,{Component} from "react";
import {Row, Col} from "react-bootstrap";

export default class EstimatedTotal extends Component{
    render(){
        return(
            <div>
                <Row>
                    <Col md={6}>
                        <p>Qty:</p>
                    </Col>
                    <Col md={6}>
                        <p>{this.props.quantity}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <h5>Est. Total:</h5>
                    </Col>
                    <Col md={6} >
                        <strong className="price-stike" style={{position:"relative",bottom:"-15px"}}>{`$${this.props.noTaxes}`}</strong>                                                                
                        <h5>{`$${this.props.price}`}</h5>
                    </Col>
                </Row>
            </div>
        )
    }
}
