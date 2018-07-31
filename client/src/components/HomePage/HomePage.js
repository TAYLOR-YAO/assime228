import React, {Component} from "react";
import axios from "axios";
import "./HomePage.css"
import Cart from "../Cart";
import {Grid, Cell} from "react-mdl";
class HomePage extends Component {
    state={
        cart:[]
    }
    componentDidMount = ()=>{
        axios.get("api/displayitems").then(response=>{
            console.log(response.data)
            this.setState({cart:response.data.sort(function() { return 0.5 - Math.random() })})
            console.log("=========================")
            console.log(this.state.cart)
        })
    }

    render(){
        return(
            <div style={{width: '80%', margin: 'auto', display:"flex"}}>
            <Grid>
                <Cell col={12}>
                    <div className="cartbox">
                        {this.state.cart.map(item=>(
                        <div key={item._id}>
                                <Cart
                                    company={item.company}
                                    name={item.name}
                                    price={item.price}
                                    details={item.details}
                                />

                        </div>
                        ))}
                    </div>
                </Cell>
            </Grid>
        </div>
        )
    }
}
export default HomePage;