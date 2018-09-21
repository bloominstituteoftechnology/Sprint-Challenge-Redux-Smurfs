import React, { Component } from 'react';
import { add } from '../actions';
import { connect } from 'react-redux';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      age: null,
      height: null
    };
  }

  saveSmurf = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div>
        {this.props.adding ? (
          <div className = 'form-two'>
          </div>
        ) : (
          <form
            className = 'form'
            onSubmit = {event => {
              event.preventDefault();
              this.props.add(this.state);
            }}
          >
            <h2>New visitors are always welcome!</h2>
            <input name = 'name' onChange = {this.saveSmurf} placeholder = 'Name' />
            <input name = 'age' onChange = {this.saveSmurf} placeholder = 'Age' />
            <input
              name = 'height'
              onChange={this.saveSmurf}
              placeholder = 'Height'
            />
            <button type = 'submit'>Join us!</button>
          </form>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    adding: state.adding,
    error: state.error
  };
};

export default connect(mapStateToProps, { add })(SmurfForm);
