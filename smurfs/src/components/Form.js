import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class Form extends React.Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.addSmurf}>
        <label>Name:</label><br/>
        <input /><br/>
        <label>Age:</label><br/>
        <input /><br/>
        <label>Height:</label><br/>
        <input /><br/>
        <button type="submit">Add Smurf</button>
        </form>
      </div>
    );
  }
}

export default connect(null)(Form);