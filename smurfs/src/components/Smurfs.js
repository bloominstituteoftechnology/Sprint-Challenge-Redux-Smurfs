import React from "react";
import Smurf from "./Smurf";

const Smurfs = props => {
	return (
		<ul>
			{props.smurfs.map((smurf, index) => {
				return <Smurf smurf={smurf} />;
			})}
		</ul>
	);
};

export default Smurfs;
