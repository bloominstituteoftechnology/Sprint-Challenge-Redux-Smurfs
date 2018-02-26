import React from 'react';

const SmurfVillage = props => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <ul>
        <li>Age: {props.age}</li>
        <li>Height: {props.height}</li>
      </ul>
    </div>
  );
};

export default SmurfVillage;
