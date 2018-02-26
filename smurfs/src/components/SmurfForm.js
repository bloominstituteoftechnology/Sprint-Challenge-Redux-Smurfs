import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/index.js';

class SmurfForm extends React.Component {
  state = {
    name: '',
    age: '',
    height: '',
    id: 0,
  };

  render() {
    return (
      <form onSubmit={this.handleSumbit} style={{display:"flex", justifyContent:"space-between"}}>
        <label>Name</label>
        <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        <label>Age</label>
        <input type="number" value={this.state.age} onChange={this.handleAgeChange} />
        <label>Height</label>
        <input type="number" value={this.state.height} onChange={this.handleHeightChange} />
        <button type="submit">Add Smurf</button>
      </form>
    );
  }

  //Blanking on how to handle all three with one handler
  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };
  handleAgeChange = event => {
    this.setState({ age: event.target.value });
  };
  handleHeightChange = event => {
    this.setState({ height: event.target.value });
  };

  handleSumbit = event => {
    event.preventDefault();
    let currentId = this.state.id;
    this.props.addSmurf(this.state);
    this.setState({
      name: '',
      age: '',
      height: '',
      id: currentId++,
    });
  };
}

export default connect(null, { addSmurf })(SmurfForm);
