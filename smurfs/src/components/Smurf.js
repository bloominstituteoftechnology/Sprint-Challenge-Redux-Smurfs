import React from 'react';
import { connect } from 'react-redux';
// Actions
import { deleteSmurf } from '../actions';

const Smurf = props => {
	return (
		<li className="Smurf">
			<h3>{props.smurf.name}</h3>
			<p>{props.smurf.age}</p>
			<p>{props.smurf.height}</p>

			<button onClick={() => props.deleteSmurf(props.smurf.id)}>
				Cull smurf
			</button>
		</li>
	);
};

export default connect(
	null,
	{ deleteSmurf }
)(Smurf);
