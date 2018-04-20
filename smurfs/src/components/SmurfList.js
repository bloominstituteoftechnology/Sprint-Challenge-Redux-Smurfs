import React from 'react';

import './SmurfList.css';

export const SmurfList = (props) => {
  console.log('smurf listing');
  return ((props.smurfs === undefined || props.smurfs.length < 1) ? null :
    <div className='SmurfList'>
      {props.smurfs.map(smurf => {
        return (
          <div key={smurf.id} className='Smurf'>
            <div className='Smurf__Head'>
              <h3>{smurf.name}</h3>
            </div>
            <div className='Smurf__Info'>
              <div>Age: {smurf.age}</div>
              <div>Height: {smurf.height}</div>
            </div>
          </div>
        )
      })}
    </div>
  );
}