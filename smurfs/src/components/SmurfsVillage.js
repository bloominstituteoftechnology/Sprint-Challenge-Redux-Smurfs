import React from 'react';
import Smurf from './Smurf';

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const SmurfsVillage = props => {
  return (
    <div>
      {props.fetchingSmurfs ? <h2>Loading Smurf Village...</h2> : null}
      <img src={require('../images/SmurfVillage.png')} alt='' />
      <ul className='smurfs-list'>
        {props.smurfs.map(smurf => {
          return (
            <Smurf
              name={smurf.name}
              id={smurf.id}
              age={smurf.age}
              height={smurf.height}
              key={smurf.id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default SmurfsVillage;
