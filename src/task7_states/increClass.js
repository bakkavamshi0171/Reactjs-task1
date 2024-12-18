import React,{Component} from "react";
import "./swtichoff.css"

class IncrementCom extends Component {
  constructor(props) {
    super(props);
    this.state = { isON: true };
  }
  handler = () => {
    this.setState({ isON: !this.state.isON });
  };
  render() {
    return (
    <>
      <button onClick={this.handler} className={this.state.isON ? "ON" : "OFF"}>
        {this.state.isON ? <h1>Switched ON</h1> : <h1>Switched OFF</h1>}
      </button>
        {this.state.isON ? <h1 className={this.state.isON ? "Text" : "UText"}>BULB IS ON</h1> : <h1 className={this.state.isON ? "Text" : "UText"}>BULB IS OFF</h1>}
      
    </>)
  }
}

export default IncrementCom;


// <>
// <button onClick={this.handler}>
//   {this.handler.isOn ? <h1>Switched Off</h1> : <h1>Switched ON</h1>}
// </button>
// <h1 className={this.state.isON ? "Text" : "UText"}>{this.state.isOn ? <h1>BULB is On</h1> : <h1>BULB is Off</h1>}</h1>
// </>
// );

// <>
