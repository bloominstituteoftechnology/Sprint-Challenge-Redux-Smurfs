import React, { Component } from "react";

const Smurfs = props => {
	console.log("PROPS", props);
	return (
		<ul>
			{props.smurfs.map((smurf, index) => {
				return <li>smurf.name</li>;
			})}
		</ul>
	);
};

export default Smurfs;
