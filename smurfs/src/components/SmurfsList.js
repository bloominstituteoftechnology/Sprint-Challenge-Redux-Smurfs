import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const SmurfsList = props => {
  const smurfs = props.smurfs.slice().reverse();
  return (
    <div className="smurf-list">
      {smurfs.map(smurf => {
        return (
          <Link to={`/smurfs/${smurf.id}`} key={Math.random()}>
            <div className="smurf-card">{smurf.name}</div>
          </Link>
        );
      })}
    </div>
  )
}

export default SmurfsList;
