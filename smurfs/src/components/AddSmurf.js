import React, { Component } from 'react';
import { connect } from "react-redux";
import { addSmurf } from "../actions";


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
    this.setState({[e.target.name]: e.target.value});
  };

  handleAddSmurf = e => {
    e.preventDefault();
    let newSmurf = this.state;
    this.props.addSmurf(newSmurf);
    this.setState({name: "", age: "", height: ""});
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleAddSmurf}>
          <input
            name="name"
            placeholder="Name"
            value={this.state.name}
            required
            onChange={this.handleInputChange.bind(this)}
          />
          <input
            name="age"
            placeholder="Age"
            value={this.state.age}
            type="number"
            required
            onChange={this.handleInputChange.bind(this)}
          />
          <input
            name="height"
            placeholder="Height"
            value={this.state.height}
            required
            onChange={this.handleInputChange.bind(this)}
          />
          <button>Add Smurf</button>
        </form>
      </div>
    );
  }
}

export default connect(null, {addSmurf})(AddSmurf);