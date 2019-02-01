import React, { Component } from 'react';
import axios from 'axios';

function Smurfs(props){

	if(props.fetchingSmurfs){
		return <h4>Loading smurfs...</h4>
	}

	return(
		<div>
			{props.smurfs.map(smurf => (
				<div key={smurf.id}>
					<p>{smurf.name}</p>
					<p>{smurf.age}</p>
					<p>{smurf.height}</p>
				</div>
			))}
		</div>
	);

}

export default Smurfs;