import React from 'react';
import { connect } from 'react-redux';
import List from './List';
import { handleAddSmurf } from '../actions/smurfs';

class Smurfs extends React.component {
  addItem = (e) => {
    e.preventDefault();

    this.props.dispatch(handleAddSmurf(
      this.input.value,
      () => this.input.value = ''
    ))
  }
  render() {
    return (
      <div>
        <h1>Smurfs List</h1>
        <input
          type='text'
          placeholder='Add smurf'
          ref={(input) => this.input = input}
        />
        <button onClick={this.addItem}>Add Smurf</button>

        <List
          items={this.props.smurfs}
        />
      </div>
    )
  }
}

export default connect((state) => ({
  smurfs: state.smurfs
}))(smurfs);