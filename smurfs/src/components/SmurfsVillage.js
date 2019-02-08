import React from 'react';
import Smurf from './Smurf';
import styled from 'styled-components';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const UlSmurfList = styled.ul`
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const SmurfsVillage = props => {
  return (
    <div>
      {props.fetchingSmurfs ? <h2>Loading Smurf Village...</h2> : null}
      <img src={require('../images/SmurfVillage.png')} alt='' />
      <UlSmurfList>
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
      </UlSmurfList>
    </div>
  );
};

export default SmurfsVillage;
