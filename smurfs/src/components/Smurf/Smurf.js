import React from "react";

const Smurf = props => {
	return (
		<div className="smurf-card">
            <li>Name: {props.smurf.name}</li>
            <li>Age: {props.smurf.age}</li>
            <li>Height: {props.smurf.height}</li>
		</div>
	)
};

export default Smurf;
