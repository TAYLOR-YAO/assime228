import React, { Component } from "react";
import { connect } from "react-redux";
import "./Navbar.css";
import ToggleDrawer from "./ToggleDrawer";
import firebase from "firebase";
import initialized from "../../../Privates/FirebaseAuth";

class Navbar extends Component {

  state = {
    isSignedIn: false,
    cartTotal:this.props.sum,
    localStorageName: "",
    userProfilePicture: "",
    userDisplayName: "",
    userID: "",
  }
  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    }
  };

  componentDidMount = () => {
    this.interval = setInterval(() => this.setState({ 
      cartTotal: this.props.sum
      })
    , 100);
   this.updateState();
  }

  updateState = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        isSignedIn: !!user,
        userDisplayName: user.displayName,
        userID: user.uid

      });
    })
  }

  render() {
    return (
      <header className="toolBar">
        <nav className="toolBar-navigation">
          <div className="toolBar-logo"><a href="/">Assime-228</a></div>
          <div className="spacer"></div>
          <div className="toolBar-links">
            <ul>
              <li ><p>{`Happy shopping, ${this.state.userDisplayName}`}</p></li>
              <li className="pullRight" style={{marginTop:"5px",paddingBottom:"-20px",textAlign:"center"}}>
                <a href="/cart">
                    <img src="https://youthdarpan.com/wp-content/uploads/2017/12/075954-3d-transparent-glass-icon-business-cart2.png" alt="shopping cart" style={{ height: "80px", width: "80px" }} />
                </a>
              </li> 
              <li className="total-cost">
                <a href="/cart"><p style={{ color: "#fff", marginBottom:"0px", fontSize:"30px" }}>{`$${this.state.cartTotal}`}</p></a>
              </li>
              <li ><a href="/">Home</a></li>
              <li  style={{margin:"5px 0", fontSize:"30px"}}>|</li>                   
              <li ><a href="/cart">Cart</a></li>
              <li  style={{margin:"5px 0", fontSize:"30px"}}>|</li>     
              <li ><div onClick={() =>{ firebase.auth().signOut()}} >
              Log Out</div></li>
            </ul>
          </div> 
          <div className="toolBar-toggle-button">
            <ToggleDrawer click={this.props.drawerClickHandler}/>
          </div>
        </nav>
      </header>
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
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);