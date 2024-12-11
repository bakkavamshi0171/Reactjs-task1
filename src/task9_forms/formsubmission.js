import React, { Component } from "react";

class FormSubmission extends Component {
  constructor() {
    super();
    this.state = {
      First_Name: "",
      Last_Name: "",
      Mobile: "",
      Email: "",
      password: "",
      submit: false,
      submission: null, // Default to null
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { First_Name, Last_Name, Mobile, Email, password } = this.state;
    this.setState({
      submit: true,
      submission: { First_Name, Last_Name, Mobile, Email, password },
      First_Name: "",
      Last_Name: "",
      Mobile: "",
      Email: "",
      password: "",
    });
  };

  render() {
    return (
      <div
  style={{
    backgroundColor: "blueviolet",
    height: "content-fit", // Optional for full height
    margin: "0 auto",
    width:"100%", padding:"20px"
  }}
>
  <div
    style={{
      backgroundColor: "white",
      color: "black",
      textAlign: "center",
      width: "fit-content",
      padding: "20px",
      borderRadius: "10px",
      margin: "0 auto", // Horizontally centers the form
    }}
  >
      
    {/* Form and submitted data */}
    <h1
      style={{
        backgroundColor: "yellow",
        color: "skyblue",
        padding: "10px",
        borderRadius: "5px",

      }}
    >
      Fill the Details
    </h1>
    <form onSubmit={this.handleSubmit}>
      <label htmlFor="First_Name">First Name: </label>
      <input
        type="text"
        name="First_Name"
        placeholder="First Name"
        id="First_Name"
        value={this.state.First_Name} // Binding to state
        onChange={this.handleChange}
      />
      <br />
      <label htmlFor="Last_Name">Last Name: </label>
      <input
        type="text"
        name="Last_Name"
        placeholder="Last Name"
        id="Last_Name"
        value={this.state.Last_Name} // Binding to state
        onChange={this.handleChange}
      />
      <br />
      <label htmlFor="Mobile">Mobile No: </label>
      <input
        type="tel"
        id="Mobile"
        name="Mobile"
        pattern="[0-9]{10}"
        required
        value={this.state.Mobile} // Binding to state
        onChange={this.handleChange}
      />

      <br />
      <label htmlFor="Email">Email add: </label>
      <input
        type="email"
        id="Email"
        name="Email"
        required
        value={this.state.Email} // Binding to state
        onChange={this.handleChange}
      />
      <br />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        id="password"
        name="password"
        required
        value={this.state.password} // Binding to state
        onChange={this.handleChange}
      />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>

    {this.state.submission && this.state.submit && (
      <div
        style={{
          border: "2px solid black",
          padding: "20px",
          backgroundColor: "lightgray",
          color: "black",
          marginTop: "20px",
        }}
      >
        <h3>Submitted Data:</h3>
        <p>
          <strong>First Name:</strong> {this.state.submission.First_Name}
        </p>
        <p>
          <strong>Last Name:</strong> {this.state.submission.Last_Name}
        </p>
        <p>
          <strong>Mobile:</strong> {this.state.submission.Mobile}
        </p>
        <p>
          <strong>Email:</strong> {this.state.submission.Email}
        </p>
        <p>
          <strong>Password:</strong> {this.state.submission.password}
        </p>
      </div>
    )}
  </div>
</div>

    )
  }
}

export default FormSubmission;
