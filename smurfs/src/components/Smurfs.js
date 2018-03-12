import React from 'react';

const Smurfs = (props) => {
//	if(!props.smurfs.length) {
//		props.smurfs.name = 'Display all names';
//	}
	return (
	 <ul>
	   {console.log('Smurfs', props.smurfs)}
		  {props.smurfs.map((smurf, i) => {
				return <li key={i}>{smurf.name}</li>
		})}
	  </ul>
	 )
  }

 export default Smurfs;
