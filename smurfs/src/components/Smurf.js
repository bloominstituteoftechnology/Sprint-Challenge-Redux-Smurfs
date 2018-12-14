import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <p>{props.name}</p>
      <p>{props.height} tall</p>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;