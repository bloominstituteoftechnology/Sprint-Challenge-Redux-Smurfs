import React from 'react';
import SmurfCard from './SmurfCard'

const Smurfs = props => {
  console.log(props.deleteSmurf, 'in smrufs')
  if(props.smurfs.length === 0) return <h1>Loading Smurfs...</h1>
  return (
    <div className='smurf-list'>
      {props.smurfs.map((smurf, i) => {
        return <SmurfCard key={smurf.id || i} smurf={smurf} deleteSmurf={props.deleteSmurf} />
      })}
    </div>
  )
}

export default Smurfs;