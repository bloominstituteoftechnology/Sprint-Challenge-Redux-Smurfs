// React import
import React from 'react';
// Component import
import SmurfCard from '../components/SmurfCard';
const SmurfList = props => {
  return (
    <div className="smurfsBody">
      <h1>Smurf Village</h1>
      <div className="smurfContainer">
        {props.smurfs.map(smurf => {
          return (
            <SmurfCard
              smurf={smurf}
              key={smurf.id}
              id={smurf.id}
              deleteSmurf={props.deleteSmurf}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SmurfList;
