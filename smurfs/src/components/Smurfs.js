import React from 'react';

const Smurfs = props => {
  return(
    <ul className="smurfs-list">
      {props.smurfs.map((smurf, index) => {
        return (
          <div key={index}>
            <li className="smurf">
              <h2>{smurf.name} Smurf</h2>
              <p>Age: {smurf.age} years</p>
              <p>Height: {smurf.height}cm</p>            
            </li>
            <button onClick={() => props.delete(smurf.id)}>Delete</button>
          </div>
        )
      })}
    </ul>
  )
}

export default Smurfs;