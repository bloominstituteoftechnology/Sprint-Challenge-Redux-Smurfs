import React from "react";

const Smurf = props => {
	return [
		<li>{`Name: ${props.smurf.name}`}</li>,
		<li>{`Age: ${props.smurf.age}`}</li>,
		<li>{`Height: ${props.smurf.height}`}</li>,
		// WORK IN PROGRESS: DELETE not fully functional yet.
		<button
			onClick={() => {
				props.delete();
			}}
		>
			Delete Smurf
		</button>
	];
};

export default Smurf;
