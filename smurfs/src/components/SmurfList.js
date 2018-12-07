import React from 'react';
import Smurf from './Smurf';

const SmurfList = props => {
  return (
    <div>
      <h2>Smurf Village</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          border: '1px solid black',
          maxWidth: '50%',
          margin: '0 auto',
        }}>
        {props.smurfs.map(s => (
          <Smurf
            key={s.name}
            smurf={s}
            selectSmurf={props.selectSmurf}
            deleteSmurf={props.deleteSmurf}
          />
        ))}
      </div>
    </div>
  );
};

export default SmurfList;
