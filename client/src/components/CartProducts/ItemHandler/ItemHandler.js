import React ,{Component} from "react";
import {ButtonGroup, Button} from "react-bootstrap";

export default class ItemHandler extends Component {
    render(){
        return(
            <ButtonGroup justified>
                <Button href="#" onClick={this.props.addToCart}>+</Button>
                <Button href="#" onClick={this.props.removeFromCart}>-</Button>
                <Button href="#" onClick={this.props.removeAllFromCart}>Remove all</Button>
            </ButtonGroup>
        )
    }
}