import React from 'react';
import {connect} from 'react-redux';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.smurf.name}</h3>
      <strong>{props.smurf.height} tall</strong>
      <p>{props.smurf.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default connect(null, {})(Smurf);

