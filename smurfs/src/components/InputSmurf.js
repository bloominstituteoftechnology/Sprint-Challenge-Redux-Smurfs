import React, { Component } from "react";
import { addSmurfs } from "../actions";
import { connect } from 'react-redux';

class InputSmurf extends Component {
  state = {
    name: '',
    age: '',
    height: '',
  };

  inputChangeHandler = event => {
    this.setState({
      [event.target.name] : event.target.value,
    })    
  };

  submitChangeHandler = event => {
    event.preventDefault();
    this.props.addSmurfs(this.state);
    this.setState({
      name: '',
      age: '',
      height: '',
    })
  };

  render() {
    return (
      <div className="Smurf__form">
        <form onSubmit={this.submitChangeHandler}>
          <input
            onChange={this.inputChangeHandler}
            placeholder="Name"
            name="name"
            value={this.state.name}
          />
          <input
            onChange={this.inputChangeHandler}
            placeholder="Age"
            name="age"
            value={this.state.age}
          />
          <input
            onChange={this.inputChangeHandler}
            placeholder="Height"
            name="height"
            value={this.state.height}
          />
          <button onClick={() => this.submitChangeHandler}>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addSmurfs })(InputSmurf);