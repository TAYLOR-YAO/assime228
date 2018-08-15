import React ,{Component} from "react";

export default class ItemHandler extends Component {
    render(){
        return(
            <div >
                <button style={{width:"60px"}} onClick={this.props.addToCart}>+</button>
                <button style={{width:"60px"}} onClick={this.props.removeFromCart}>-</button>
                <button style={{width:"60px"}} onClick={this.props.removeAllFromCart}>all</button>
                
            </div>
        )
    }
}