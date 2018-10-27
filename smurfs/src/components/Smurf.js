import React from 'react';

class Smurf extends React.Component {
  render() {
    return (
      <div>
        <h4>Name: {this.props.smurf.name}</h4>
        <p>Age: {this.props.smurf.age}</p>
        <p>Height: {this.props.smurf.height}</p>
      </div>
    )
  }
}

export default Smurf;