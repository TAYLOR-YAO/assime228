import React,{Component} from "react";
import { connect } from "react-redux";
import {Modal, Button, Row, Col} from "react-bootstrap";
import StipeCheckout from "./StripeCheckout";
import "./Checkout.css"
class Trigger extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleHide = this.handleHide.bind(this);
  
      this.state = {
        show: false,
        sum: this.props.cart.map(item=> item.price.$numberDecimal * item.quantity).reduce((a, b) => a + b, 0).toFixed(2)
      };
    }
  componentDidMount = () =>{
      console.log(this.state.sum)
  }
    handleHide() {
      this.setState({ show: false });
    }
    render() {
      return (
        <div className="modal-container" style={{ height: 200 }}>
          <Button
            bsStyle="primary"
            bsSize="large"
            onClick={() => this.setState({ show: true })}
            style={{background: "#6351ce"}}
          >
            Pay now
          </Button>
  
          <Modal
            show={this.state.show}
            onHide={this.handleHide}
            container={this}
            aria-labelledby="contained-modal-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">
                Select your payment method!
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <h3>Total: ${this.state.sum}</h3>
                </Row>                
                <Row style={{marginBottom:"100px"}}>
                    <Col md={3}>
                        <h6> Credit & debit</h6>
                        <hr/>
                        <br/>
                        <StipeCheckout/>
                        
                    </Col>
                    <Col md={3} style={{borderLeft:"3px solid #333"}}>
                        <h6>Fooz</h6>
                        <hr/> 
                        <img className="payement-logo" src="http://anoumabo.ci/wp-content/uploads/2017/06/moov-1.png" alt="Flooz"/>                      
                    </Col> 
                    <Col md={3} style={{borderLeft:"3px solid #333"}}>
                        <h6>Tmoney</h6>
                        <hr/>  
                        <img className="payement-logo" src="https://lh3.googleusercontent.com/q3m20-lF305VIaIYR9q7PwpvWadez2P_fE1E3Dq3rV7pXlqwBik-Jq88lRnghLlJcA" alt="Tmoney" />                      
                    </Col>
                    <Col md={3} style={{borderLeft:"3px solid #333"}}>
                        <h6>MTN Money</h6>
                        <hr/>
                        <img className="payement-logo" src="https://www.paymentscardsandmobile.com/wp-content/uploads/2013/09/MTN-Mobile-Money.jpg" alt="Mtn money"/>                                                                      
                    </Col>                                                                                                  
                </Row> 
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleHide} style={{background:"#6351ce !important"}}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
function mapStateToProps(state){

    return{
        cart:state.cart
    }
  }
  function mapDispatchToProps(dispatch){
    return{
  
      getAllCarts:(item) =>{
            dispatch({type: "GET_All_CARTS", payload:item})
        },
        clearCarts:(item) =>{
            dispatch({type: "CLEAR_CARTS"})
        }
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Trigger); 