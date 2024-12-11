import {Component}  from "react";
import React from "react";
import GrandChlidCom from "./grandChlidComp";

class ChlidCom extends Component{
    render(){
        return(
            <>
            <h1> Child Component</h1>
            <GrandChlidCom loggin={this.props.isloggedin} />
            </>
        )
    }
}

export default ChlidCom;