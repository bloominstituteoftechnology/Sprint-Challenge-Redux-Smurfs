import React from 'react';
import Smurf from './Smurf';
import './Smurfs.css';

import smurfsImg from  '../img/smurfs_img.jpg';

const Smurfs = props => {
  return (
    <div className="smurfs-container">
      <div className="image-container">
        <img src={smurfsImg} alt="smurfs jumbotron" className="smurfs-img"/>
      </div>
      <ul>
        {props.smurfs.map(smurf => {
          return (
          <Smurf
              name={smurf.name}
              age={smurf.age}
              height={smurf.height}
              key={smurf.height}
          />
          );
        })}
      </ul>
    </div>
  );
}

export default Smurfs;