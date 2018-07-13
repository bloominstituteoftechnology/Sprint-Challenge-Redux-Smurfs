import React from 'react';
import './App.css';

class Smurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: ''
    }
  }
  render() {
    return (
      <div key={this.props.smurf.id}>
        <h4>{this.props.smurf.name}</h4>
        <h4>{this.props.smurf.age}</h4>
        <h4>{this.props.smurf.height}</h4>
      </div>
    )
  }
}

export default Smurf;
