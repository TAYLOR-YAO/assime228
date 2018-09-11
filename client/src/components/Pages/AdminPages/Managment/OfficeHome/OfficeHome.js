import React, {Component} from "react";
import StoreIdentification from "./StoreIdentification";

const valide = localStorage.getItem("identifiedSore");
function valideted(){
    if(valide){
       return JSON.parse(valide);
    } else {
        return ""
    }
}
class OfficeHome extends Component{
    state = {
        identified: false
    }
    render(){
        if(!valideted()){
            return<StoreIdentification/>
        }
        return(
            <div>  
                <h1>Office Home page</h1>
            </div>
        )
    }
}

export default OfficeHome;