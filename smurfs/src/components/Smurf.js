import React from 'react';

/*
 * Props taken in:
 *   - age: 0
 *   - height: "5cm"
 *   - name: ""
 */
 const Smurf = (props) => {
  return (
    <div className='smurfData'>
      <div className='smurfName'>{props.smurf.name}</div>
      <div>{props.smurf.age} years old.</div>
      <div>{props.smurf.height} small.</div>
    </div>
  );
};

export default Smurf;