import React from "react";

import Smurf from "../Smurf/Smurf";

const SmurfList = props => {
    console.log('SmurfList', props)
	return (
		<ul className="smurf-list-wrapper">
			{props.smurfs.map(smurf => {
                return <Smurf 
                    key={smurf.name} 
                    smurf={smurf} 
                    handleDelete={props.handleDelete}
                    />;
			})}
		</ul>
	);
};

export default SmurfList;
