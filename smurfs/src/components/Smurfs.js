import React from 'react';

const Smurfs = props => {
    console.log('PROPS.SMRUFS', props.smurfs);
  return(
    <div>
      {props.fetchingSmurfs ? <p>Fetching Smurfs...</p> : null }
      {props.smurfs.length !== 0 ? <p>Here's who's in the village:</p> : <p>Add smurfs to the village:</p> }
      <ul>
        {props.smurfs.map(smurf => {
          return (
            <li>
              {smurf.name}: height: {smurf.height}, {smurf.age} years old
              <button onClick={() => props.deleteSmurf(smurf.id)}>Delete</button>
            </li>
          )
        })}           
      </ul>
    </div>
    )
}

export default Smurfs;