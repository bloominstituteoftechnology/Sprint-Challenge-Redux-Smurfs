import React from 'react';

class Smurf extends React.Component {
  render() {
    return (
      <li>
        {this.props.smurf.name} <br />
        {this.props.smurf.age} <br />
        {this.props.smurf.height} <br />
      </li>
    );
  };
};

export default Smurf;