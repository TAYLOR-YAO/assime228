import React from "react";
import {Card, CardTitle, CardActions, CardText, Button} from "react-mdl";
export default function Cart(props){
    return <div style={{margin:"10px 10px"}}>
        <Card shadow={0} style={{width: '250px', height: '420px', margin: 'auto'}}>
            <Button colored>{props.company}</Button>
            <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}></CardTitle>
            <h6>{props.name}</h6>
            <CardText>
                {props.details}
            </CardText>
            <CardText>
                <span>$</span>{props.price}
            </CardText>
            <CardActions border>
                <Button colored>Add To Cart</Button>
            </CardActions>
        </Card>
    </div>

}