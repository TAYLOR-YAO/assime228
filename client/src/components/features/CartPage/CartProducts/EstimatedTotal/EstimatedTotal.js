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
                        <h4>Est. Total</h4>
                    </Col>
                    <Col md={6}>
                        <h4>{`$${this.props.price}`}</h4>
                    </Col>
                </Row>
            </div>
        )
    }
}
