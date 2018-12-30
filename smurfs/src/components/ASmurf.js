import React from "react";

const ASmurf = props => {
	return (
		<div>
			<p>Moniker: {props.smurf.name}</p>
			<p>Age: {props.smurf.age} years old</p>
			<p>Peak: {props.smurf.height} tall.</p>
		</div>
	)
}

export default Smurf; 