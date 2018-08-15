import React, {Component} from "react";
import firebase from "firebase";
import initialized from "../../../Privates/FirebaseAuth";
import Cart from "../../../features/CartPage/Cart";
import UserNavbar from "../UserToolBar";
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
    componentDidMount = () =>{
        this.authantification()
    }
    authantification =()=>{
        firebase.auth().onAuthStateChanged(user=>{
            this.setState({isSignedIn:!!user});
        })
    }

    render(){
        return  (<div style={{marginBottom:"100px"}}>   
                {this.state.isSignedIn ? <div style={{position:"relative", top:"100px"}}>
                        <UserNavbar/>
                        <div style={{width: '80%', margin: 'auto'}}>
                            <Cart/>
                        </div>
                    </div>
                    : <Login/>
                }
            </div>
        )
    }
}


export default CartPage;