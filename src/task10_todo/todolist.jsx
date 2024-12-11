import React, { Component } from "react";
import Delete from "../assets/trash.png";
import Pen from "../assets/pen.png";
import "./todo.css";

class Todolist extends Component {
  constructor() {
    super();
    this.state = {
      todo: "",
      list: [],
    };
  }
  handleText = (e) => {
    this.setState({ todo: e.target.value });
  };

  handlerSubmit = (e) => {
    e.preventDefault();
    // this.state.list.push(this.setState(e.target.value));
    if (this.state.todo) {
      this.setState((prevState) => ({
        list: [...prevState.list, prevState.todo], // Add new todo to the list
        todo: "", // Clear the input field after submission
      }));
    }
  };

  handleEdit = (Index) => {
    setTimeout(() => {
      this.setState((prevState) => ({
        // here prevState means the current state which is this all this.state = { todo: "",list: [],};
        todo: prevState.list[Index], // it goes in the input field for editing
        list: prevState.list.filter((_, i) => i !== Index), // Remove the item temporarily
      }));
    }, 500);
  };

  handleDelete = (Index) => {
    this.setState((prevState) => ({
      list: prevState.list.filter((_, i) => i !== Index),
    }));
  };

  render() {
    return (
      <React.Fragment>
        <div className="todoMain">
          <div className="todo-Header">
            <h1>List Your Tasks Here (TODO LIST)</h1>
          </div>
          <div className="todo-inputfield">
            <form onSubmit={this.handlerSubmit}>
              <input
                type="text"
                className="Todo"
                name="TodoList"
                value={this.state.todo}
                onChange={this.handleText}
                placeholder="Enter a task"
              />
              <button type="submit" className="todo-sumbit">
                Add
              </button>
            </form>

            <div className="todo-display">
              {this.state.list.map((Items, Index) => {
                return (
                  <div className="listDiv">
                    <p key={Index} className="todo-listItem">
                      {Items}
                    </p>
                    <div className="todoeditdeleteicons">
                    <img
                      src={Pen}
                      alt="Delete"
                      onClick={() => this.handleEdit(Index)}
                      style={{
                        padding: "5px",
                        margin: "0px",
                        height: "50px",
                        borderRadius: "50%",
                        width: "50px",
                        marginLeft: "5px",
                      }}
                    />
                    <img
                      src={Delete}
                      alt="Edit"
                      onClick={() => this.handleDelete(Index)}
                      style={{
                        height: "50px",
                        padding: "5px",
                        borderRadius: "50%",
                        width: "50px",
                        marginLeft: "5px",
                      }}
                    />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Todolist;
