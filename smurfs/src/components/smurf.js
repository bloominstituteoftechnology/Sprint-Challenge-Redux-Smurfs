
import React from 'react';

class Smurf extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      edit: false
    }
  }

  render() {
    return (
      <div className="Smurf">
        <h3>{this.props.smurf.name}</h3>
        <strong>{this.props.smurf.height} tall</strong>
        <p>{this.props.smurf.age} smurf years old</p>
      </div>
    );
  }
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;