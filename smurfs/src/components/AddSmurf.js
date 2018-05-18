import React, { Component } from 'react';
import { connect } from "react-redux";



class AddSmurf extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  handleInputChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <form>
          <input
            name="name"
            placeholder="Name"
            onChange={this.handleInputChange}
          />
          <input
            name="age"
            placeholder="Age"
            onChange={this.handleInputChange}
          />
          <input
            name="height"
            placeholder="Height"
            onChange={this.handleInputChange}
          />
          <button>Add Smurf</button>
        </form>
      </div>
    );
  }
}

export default AddSmurf;