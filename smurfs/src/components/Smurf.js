import React from 'react';

class Smurf extends React.Component {
  render() {
    return (
      <li>
        Name: {this.props.smurf.name} <br />
        Age: {this.props.smurf.age} years old<br />
        Height: {this.props.smurf.height} cm tall<br />
      </li>
    );
  };
};

export default Smurf;