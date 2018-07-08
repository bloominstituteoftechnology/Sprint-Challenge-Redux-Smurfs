import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class AddSmurfForm extends Component {
  state = {
    name: '',
    age: '',
    height: ''
  }

  handleChange = (event) => {
    const attrs = this.state;
    attrs[event.target.name] = event.target.value;
    this.setState({ attrs });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addSmurf(this.state);
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  };

  render() {
    return (
      <div className="form">
        <h3>Add a new smurf:</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.name}
            name="name"
            placeholder="Name"
            type="text" />
          <input
            onChange={this.handleChange}
            value={this.state.age}
            name="age"
            placeholder="Age"
            type="number" />
          <input
            onChange={this.handleChange}
            value={this.state.height}
            name="height"
            placeholder="Height"
            type="text" />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state;
}
export default connect(mapStateToProps, { addSmurf })(AddSmurfForm);