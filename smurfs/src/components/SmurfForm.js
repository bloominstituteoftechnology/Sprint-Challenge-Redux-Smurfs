import React, { Component } from "react";
class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    let smurf = this.state;
    this.props.addNewSmurf(smurf);
    this.setState({ name: "", age: "", height: "" });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="smurf-form">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="Smurf name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Smurf age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Smurf height"
            value={this.state.height}
            name="height"
          />
          <button className="form-link" type="submit">
            Add!
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
