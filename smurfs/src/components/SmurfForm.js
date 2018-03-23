import React, { Component } from "react";
import { getSmurfs, addSmurf } from "../actions/index";
import { connect } from "react-redux";

class SmurfForm extends Component {
  state = {
    name: '',
    age: '',
    height: '',
    id: '',
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  createSmurf = event => {
    event.preventDefault();
    this.props.addSmurf(this.state);
    this.setState({
      name: '',
      age: '',
      height: ''
    });
    setTimeout(() => {
      this.props.getSmurfs();
    }, 20);
  };


  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.createSmurf}>
          <input
            onChange={this.handleInput}
            placeholder="name"
            type="text" 
            name="name"
            value={this.state.name}
          />
          <input
            onChange={this.handleInput}
            placeholder="age"
            type="number" 
            name="age"
            value={this.state.age}
          />
          <input
            onChange={this.handleInput}
            placeholder="height"
            type="number" 
            name="height"
            value={this.state.height}
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    addingSmurf: state.addingSmurf,
    error: state.error
  };
};

export default connect(mapStateToProps, { getSmurfs, addSmurf })(SmurfForm);
