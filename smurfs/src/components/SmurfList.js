import React from 'react';

function SmurfList (props) {
  console.log('SmurfList.js props', props);
  return (
    <div className="SmurfList">
      {props.smurfs.map((smurf, index) => {
        return <li key={index}>{smurf}</li> 
      })}
    </div>
  )
}

export default SmurfList;