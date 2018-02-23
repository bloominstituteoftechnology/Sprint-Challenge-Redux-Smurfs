import React from 'react';

const SmurfList = (props) => {
  return (
    <ul>
      {props.smurfs.map((smurf, i) => {
        return <li key={smurf.id}>
          <div>Name</div>
          <div>{smurf.name}</div>
          <div>Age</div>
          <div>{smurf.age} smurfs old</div>
          <div>Height</div>
          <div>{smurf.height} cm tall</div>
        </li>
      })}
    </ul>
  );
};

export default SmurfList;