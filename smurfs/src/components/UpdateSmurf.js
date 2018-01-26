import React from 'react';

const UpdateSmurf = props => {
	return (
		<form>
			<input placeholder={props.smurf.name}/>
			<input placeholder={props.smurf.age}/>
			<input placeholder={props.smurf.height}/>
		</form>
	);
};

export default UpdateSmurf;