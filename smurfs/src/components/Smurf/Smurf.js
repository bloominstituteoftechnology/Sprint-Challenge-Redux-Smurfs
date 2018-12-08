import React from "react";


const Smurf = props => {
	console.log('SMURF', props)
	return (
		<div className="smurf-card">
			<h4>{props.smurf.id}</h4>
			<li>Name: {props.smurf.name}</li>
			<li>Age: {props.smurf.age}</li>
			<li>Height: {props.smurf.height}</li>
			<button onClick={props.handleDelete}>Delete Smurf</button>

		</div>
	)
};

export default Smurf;
