import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions/actions';

class SmurfForm extends Component {
  state = {
    name: '',
    age: '',
    height: '',
  };

  // setInputVal
  setInputVal = e => {
    this.setState({ [ e.target.name ]: e.target.value })
  }

  // setNewSmurf
  setNewSmurf = smurf => {
    
  }

  // render
  render() {
    return (
      <form onSubmit={ e => e.preventDefault() }>
        <input
          name='name'
          type='text'
          value={ this.state.name }
          onChange={ this.setInputVal }
        />

        <input
          name='age'
          type='text'
          value={ this.state.age }
          onChange={ this.setInputVal }
        />

        <input
          name='height'
          type='text'
          value={ this.state.height }
          onChange={ this.setInputVal }
        />

        <input
          type='submit'
          value='Add New Smurf'
          onClick={ () => this.props.addSmurf(this.state) }
        />
      </form>
    )
  }
}

export default connect(null, { addSmurf })(SmurfForm)