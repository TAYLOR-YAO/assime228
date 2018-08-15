import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavLink, NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
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
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
}

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ 
      cartTotal: this.props.sum
    })
      , 100);
  }
//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

  onClick(){
    this.setState({
        collapse: !this.state.collapse,
    });
  }

  toggle() {
    this.setState({
        dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    return (
      <Navbar color="indigo" dark expand="md" scrolling className="navbar fixed-top navbar-light bg-faded" height="60" >
        <NavbarBrand href="/">
            <img src="https://image.freepik.com/vetores-gratis/e-commerce-conceito_23-2147505751.jpg" alt="Brand Logo" height="50" className="d-inline-block align-top"/>
            <span className="brand-text" style={{marginLeft:"5px"}}>Assime-228</span>
        </NavbarBrand>
        { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
        <Collapse isOpen = { this.state.collapse } navbar className=".d-xl-flex">
            <NavbarNav left>
                <NavItem active>
                    <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="cart">
                      Cart
                    </NavLink>
                </NavItem>
            </NavbarNav>
            <NavbarNav >
                
                <NavItem>
                    <NavLink to="/cart">
                    <span className="cost-text" style={{marginLeft:"5px"}}>{`$${this.props.sum}`}</span>
                    <img src="http://www.contadis.ch/includes/templates/Adidas_ch/images/shopping_cart_logo.gif" alt="Shopping Cart" className="shopping-buggy"/>
                    </NavLink>
                </NavItem>
            </NavbarNav>
            <NavbarNav right>
            <NavItem>
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle className="upper-textes"  nav caret>{`Happy shopping, ${this.state.username}`}</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem href="#">Profile</DropdownItem>
                        <DropdownItem href="/" onClick={()=>firebase.auth().signOut()}>Log out!</DropdownItem>
                    </DropdownMenu>
                    </Dropdown>
                </NavItem>
                <NavItem>
                </NavItem>
            </NavbarNav>
        </Collapse>
    </Navbar>
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
export default connect(mapStateToProps, mapDispatchToProps)(UserToolBar)
