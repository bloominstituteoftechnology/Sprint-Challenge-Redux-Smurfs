import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSmurf } from '../actions';

class CreateSmurfForm extends Component {
  state = {
    name: '',
    age: '',
    height: ''
  }
  render() {
    return(
      <div>
        <form action="">
          <input value={this.state.name}/>
          <input value ={this.state.age}/>
          <input value ={this.state.height}/>
          <button>Create Smurf!</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { createSmurf })(CreateSmurfForm);