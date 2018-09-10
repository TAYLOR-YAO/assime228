import React, {Component} from 'react'; 
import {Modal} from "react-bootstrap";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import initialized from "../../../Privates/FirebaseAuth";
import HomePage from "../HomePages";
import "./Login.css";

class Login extends Component {
    state={isSignedIn:false}

    uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
        callbacks: {
          signInSuccessWithAuthResult: () => false,
        }
    };

    async componentDidMount (){
        firebase.auth().onAuthStateChanged(user=>{
            this.setState({isSignedIn:!!user});
            if(user){
                const authanticated={
                name: firebase.auth().currentUser.displayName,
                image:firebase.auth().currentUser.photoURL,
                email:firebase.auth().currentUser.email,
                userId:firebase.auth().currentUser.uid
                }
                localStorage.setItem("currentUserId",firebase.auth().currentUser.uid); 
                localStorage.setItem("currentUser",JSON.stringify(authanticated));
            }

        })
    }

    render () {
    return(
            <div >
                {this.state.isSignedIn ?
                <div>
                    <HomePage/>
                </div>
            : 
            <div className="logins" >
                <div className="static-modal">
                <Modal.Dialog style={{background:"#333"}}>
                    <Modal.Header>
                        <Modal.Title>
                            <div style={{textAlign:"center"}}>Login with Google & Facebook</div>
                        </Modal.Title>
                    </Modal.Header>
                
                    <Modal.Body>
                    <div className="login">
                        <StyledFirebaseAuth
                            uiConfig={this.uiConfig}
                            firebaseAuth = {firebase.auth()}
                        />
                    </div>
                    </Modal.Body>
                
                    <Modal.Footer>
                        <div style={{textAlign:"center"}}>ASSIME-228</div>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        </div>
            
        }

        </div>
        )
    }
}
export default Login;