import React from 'react';
import {removeSmurf} from '../actions';
import {connect} from 'react-redux';

class Smurf extends React.Component {
  handleRemoveSmurf = () => {
    this.props.removeSmurf(this.props.id);
  }
  render() {
    return (
      <div>
        <h4>Name: {this.props.smurf.name}</h4>
        <p>Age: {this.props.smurf.age}</p>
        <p>Height: {this.props.smurf.height}</p>
        <button onClick={this.handleRemoveSmurf}>Remove This Smurf</button>
      </div>
    )
  }
}

export default connect(null, {removeSmurf})(Smurf);