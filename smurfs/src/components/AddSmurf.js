import React, { Component } from 'react';
import { connect } from 'react-redux';
import addSmurfAction from '../actions/addSmurfAction';


class AddSmurf extends Component {
  state = {
    name: '',
    age: '',
    height: ''
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.addSmurfAction(this.state);
    this.setState({
      name: '',
      age: '',
      email: ''
    });
  };

  change = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form>
          <h4>Add a Smurf</h4>
          <input
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={event => this.change(event)}
          />
          <br />
          <input
            name="age"
            placeholder="Age"
            value={this.state.age}
            onChange={event => this.change(event)}
          />
          <br />
          <input
            name="height"
            placeholder="Height"
            value={this.state.height}
            onChange={event => this.change(event)}
          />
          <br />
          <button onClick={event => this.onSubmit(event)}>Add Smurf</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    fetched: store.fetched,
    smurfs: store.smurfsReducer.smurfs,
    error: store.errorMessage
  };
};

const actions = {
  addSmurfAction
};

export default connect(mapStateToProps, actions)(AddSmurf);
