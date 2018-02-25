import React, { Component } from 'react';
import { createSmurf } from '../actions';
import { connect } from 'react-redux';

class SmurfForm extends Component {
  state = {
    name: '',
    age: '',
    height: '',
    id: '',
  };
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitSmurf = e => {
    e.preventDefault();
    this.props.createSmurf(this.state);
    //this.props.updateSmurf(this.state);
    this.setState({
      name: '',
      age: '',
      height: '',
    });
  };
  
  // updateSmurf = e => {
  //   e.preventDefault();
  //   this.props.updateSmurf(this.state);
  //   //this.props.updateSmurf(this.state);
  //   this.setState({
  //     name: '',
  //     age: '',
  //     height: '',
  //     id: '',
  //   });
  // };

  render() {
    return (
      <div className="col-one-half friend-form">
        <form>
          <input
            onChange={this.handleInput}
            type="text"
            name="name"
            placeholder="name"
          />
          <input
            onChange={this.handleInput}
            type="number"
            name="age"
            placeholder="age"
          />
          <input
            onChange={this.handleInput}
            type="text"
            name="height"
            placeholder="height"
          />
          <button type="submit" onClick={this.submitSmurf}>
            Add Friend
          </button>
          <button type="submit" onClick={this.updateSmurf}>
            Update Friend
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    addingSmurf: state.addingSmurf,
    error: state.error,
  };
};

export default connect(mapStateToProps, { createSmurf })(SmurfForm);
