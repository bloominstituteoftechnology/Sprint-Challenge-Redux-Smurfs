import React from 'react';

import Smurf from './Smurf';

export default function SmurfList(props) {
	return (
		<div className="smurf-list">
			{props.smurfs.map((smurf, i) => (
				<Smurf key={i} smurf={smurf} />
			))}
		</div>
	);
}
