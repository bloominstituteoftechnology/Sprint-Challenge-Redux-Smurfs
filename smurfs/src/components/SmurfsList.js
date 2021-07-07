import React from 'react';
import './App.css';

export const SmurfsList = (props) => {
  return (
    <div className='smurfs-list'>
    <ul>
      {props.smurfs.map(smurf => {
        return (
          <li key={smurf.name}>
            <div className='individual-smurf'>
              <h2>My name is: {smurf.name}</h2>
              <h4>I am: {smurf.age}</h4>
              <h4>I am: {smurf.height} cm tall</h4> 
            </div>          
          </li>
        )
      })}
    </ul>
  </div>
  ) 
}