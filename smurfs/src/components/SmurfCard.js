import React from 'react';

const SmurfCard = props => {
  return (
    <div className="smurf-card">
      <p>Name: {props.smurf.name}</p>
      <p>Age: {props.smurf.age} smurf years old</p>
      <p>Height: {props.smurf.height} cm</p>
    </div>
  );
};

export default SmurfCard;