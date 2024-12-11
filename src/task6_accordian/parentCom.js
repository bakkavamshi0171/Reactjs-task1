import { Component } from "react";
import React from "react";
import ChlidCom from "./chlidCom";
import UserCom from "./user";
import AdminCom from "./admin";

class ParentCom extends Component {
  render() {
    return (
      <>
        { this.props.loggedIn ? <AdminCom/> : <UserCom />}
        <ChlidCom isloggedin={this.props.loggedIn}/>
      </>
    );
  }
}

export default ParentCom;