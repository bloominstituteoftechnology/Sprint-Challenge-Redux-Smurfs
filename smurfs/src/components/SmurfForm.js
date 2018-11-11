import React, { Component } from "react";
import axios from "axios";
import { addSmurf } from '../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


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
    let smurf = { ...this.state };
    axios.post("http://localhost:3333/smurfs", smurf).then(response => {
      this.setState({
        smurf: response.data
      });
      window.location.reload();
    });

    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

SmurfForm.PropTypes = {
  addSmurf: PropTypes.func.isRequired
}

export default connect (null, { addSmurf }) (SmurfForm);