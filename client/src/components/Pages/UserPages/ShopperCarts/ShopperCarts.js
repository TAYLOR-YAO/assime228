import React, {Component} from "react";
import firebase from "firebase";
import initialized from "../../../Privates/FirebaseAuth";
import Cart from "../../../features/CartPage/Cart";
// import UserNavbar from "../UserToolBar";
import Login from "../Login/Login";

class CartPage extends Component {
    constructor(props){
      super(props)
  
      this.state = {
        isSignedIn: false,
        cartTotal:this.props.sum,
        deduxCart: this.props.sum,
        username:""
      }
    }
    async componentDidMount (){
        this.authantification()
    }
    authantification =()=>{
        firebase.auth().onAuthStateChanged(user=>{
            this.setState({isSignedIn:!!user});
            console.log("user", user)
        })
    }

    render(){
        const {isSignedIn} = this.state;
        if(!isSignedIn){
            return <Login/>
            
        }
        return (<div style={{marginBottom:"100px"}}>   
        <div style={{width: '80%', margin: 'auto', marginTop:"100px"}}>
            <Cart/>
        </div>
    </div>) 
    }
}


export default CartPage;