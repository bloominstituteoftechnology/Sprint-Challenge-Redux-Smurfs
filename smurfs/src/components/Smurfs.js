import React from 'react';

const Smurfs = props => {
  return(
    <ul className="smurfs-list">
      {props.smurfs.map((smurf, index) => {
        return (
          <li className="smurf" key={index}>
            <h2>{smurf.name} Smurf</h2>
            <p>Age: {smurf.age} years</p>
            <p>Height: {smurf.height}cm</p>            
          </li>
        )
      })}
    </ul>
  )
}

export default Smurfs;