import {Component} from "react";
import React from "react";

class GrandChlidCom extends Component {
  render() {
    return (
    <>
      { this.props.loggin ? <p>Login successful</p> : <p>Login Unsuccessfull</p>}
    </>  )
  }
}

export default GrandChlidCom;
