import React from "react";
import Smurf from "./Smurf";

const Smurfs = props => {
	const style = {
		marginRight: 40
	};
	return (
		<ul style={style}>
			{props.smurfs.map((smurf, index) => {
				return <Smurf key={smurf.id} smurf={smurf} />;
			})}
		</ul>
	);
};

export default Smurfs;
