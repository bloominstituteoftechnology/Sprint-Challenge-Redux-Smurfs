import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateSmurf } from '../actions';

class Smurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.smurf.name,
      age: this.props.smurf.age,
      height: this.props.smurf.height
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    this.props.updateSmurf(smurf, this.props.smurf.id);
  };

  render() {
    const { smurf } = this.props;
    return (
      <div>
        <div>{smurf.name}</div>
        <div>{smurf.age}</div>
        <div>{smurf.height}</div>
        {this.props.update ? (
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="age"
              value={this.state.age}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="height"
              value={this.state.height}
              onChange={this.handleInputChange}
            />
            <button>Save</button>
          </form>
        ) : null}
      </div>
    );
  }
}

export default connect(
  null,
  { updateSmurf }
)(Smurf);
