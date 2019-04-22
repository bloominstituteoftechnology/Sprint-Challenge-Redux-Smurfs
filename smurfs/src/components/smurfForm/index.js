import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../../actions';

import './smurfForm.css';

class SmurfForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      age: '',
      height: ''
    }
  }
  inputHandler = (e) => this.setState({[e.target.name]: e.target.value})

  addSmurf = (e) => {
    e.preventDefault();
    this.props.addSmurf(this.state);
    return this.setState({
      name: '',
      age: '',
      height: ''
    })
   }

  render() {
    return (
      <form className='smurf-form' onSubmit={this.addSmurf}>
        <h1>Add Smurf</h1>
        <div className="form-input-container">
          <p className="smurf-form-text">Name:</p>
          <input className='smurf-input'
                 name='name'
                 value={this.state.name}
                 onChange={this.inputHandler}
                 />
        </div>
        <div className="form-input-container">
          <p className="smurf-form-text">Age:</p>
          <input className='smurf-input'
                 name='age'
                 value={this.state.age}
                 onChange={this.inputHandler}
                 />
        </div>
        <div className="form-input-container">
          <p className="smurf-form-text">Height:</p>
          <input className='smurf-input'
                 name='height'
                 value={this.state.height}
                 onChange={this.inputHandler}
                 />
        </div>
        <br />
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetched: state.fetched,
    addingSmurf: state.addingSmurf,
    error: state.error
  }
}


export default connect(mapStateToProps, { addSmurf })(SmurfForm);