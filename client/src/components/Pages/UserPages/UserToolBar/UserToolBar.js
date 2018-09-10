import React, { Component } from "react";
import {Nav,Navbar,NavItem,NavDropdown,MenuItem} from "react-bootstrap";
import firebase from "firebase";
import initialized from "../../../Privates/FirebaseAuth";
import { connect } from "react-redux";
import "./UserToolBar.css";

class UserToolBar extends Component {
  constructor(props){
    super(props)

    this.state = {
      collapse: false,
      isWideEnough: false,
      dropdownOpen: false,
      isLogedIn: false,
      cartTotal:this.props.sum,
      deduxCart: this.props.sum,
      username:firebase.auth().currentUser.displayName
    }
}

    async componentDidMount () {
        this.interval = setInterval(() => this.setState({ 
        cartTotal: this.props.sum
        })
      , 100);
  }

  render() {
    return (
    <div style={{textAlign:"center"}}>
        <Navbar inverse collapseOnSelect className="navbar navbar-inverse navbar-fixed-top">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Assime-228</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            
            <Nav >
              <NavDropdown eventKey={3} title={`Happy shopping, ${this.state.username}`} id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Profile</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.2} onClick={()=>firebase.auth().signOut()}>Log out!</MenuItem>
              </NavDropdown>
              <NavItem eventKey={2} href="cart">
                <img src="http://www.icon100.com/up/1700/512/cart.png" alt="Shopping cart"/>
                <span>{`$${this.props.sum}`}</span>
              </NavItem>
            </Nav>
            <Nav pullRight>
            <Nav>
              <NavItem eventKey={1} href="/">
                Home
              </NavItem>
              <NavItem eventKey={2} href="cart">
                Cart
              </NavItem>
            </Nav>
            </Nav>
          </Navbar.Collapse>
        </Navbar>;
      </div>
    )
  }
}

function mapStateToProps(state){

  return{
      sum:state.cart.map(item=> item.price.$numberDecimal * item.quantity).reduce((a, b) => a + b, 0).toFixed(2)
  }
}
function mapDispatchToProps(dispatch){
  return{

    getAllCarts:(item) =>{
          dispatch({type: "GET_All_CARTS", payload:item})
      }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserToolBar);
