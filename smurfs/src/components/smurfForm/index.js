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
        <h1>Add A Smurf</h1>
        <span>
          <p>Name: </p>
          <input className='smurf-input'
                 name='name'
                 value={this.state.name}
                 onChange={this.inputHandler}
                 />
        </span>
        <span>
          <p>Age: </p>
          <input className='smurf-input'
                 name='age'
                 value={this.state.age}
                 onChange={this.inputHandler}
                 />
        </span>
        <span>
          <p>Height: </p>
          <input className='smurf-input'
                 name='height'
                 value={this.state.height}
                 onChange={this.inputHandler}
                 />
        </span>
        <br />
        <button type='submit'>Submit</button>
        {this.props.addingSmurf ? <p>Adding a smurf...</p> : null}
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
