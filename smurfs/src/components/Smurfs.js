import React, { Component } from "react";

const Smurfs = props => {
	// console.log("PROPS", props);
	return (
		<ul>
			{props.smurfs.map((smurf, index) => {
				return [
					<li>{`Name: ${smurf.name}`}</li>,
					<li>{smurf.age}</li>,
					<li>{smurf.height}</li>
					<button onClick={()=> {
						props.handleDeleteSmurf();
					}}
					>
						Delete Smurf
					</button>
				];
			})}
		</ul>
	);
};

export default Smurfs;
