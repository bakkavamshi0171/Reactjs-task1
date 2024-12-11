import { Component } from "react";
import React from "react";

class Evenorodd extends Component {
  constructor() {
    super();
    this.state = {
      todo: "",
      message: "",
    };
  }

  handleChange = (e) => {
    this.setState({ todo: e.target.value });
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    const number = parseInt(this.state.todo, 10); // Convert input to a number
    if (isNaN(number)) {
      this.setState({ message: "Please enter a valid number" });
    } else {
      this.setState({
        message: number % 2 === 0 ? "Even number" : "Odd number",
        todo: "", 
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="todo"
            id="todo"
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>

        <h2 style={{color:"green"}}>{this.state.message}</h2>
      </div>
    );
  }
}

export default Evenorodd;
