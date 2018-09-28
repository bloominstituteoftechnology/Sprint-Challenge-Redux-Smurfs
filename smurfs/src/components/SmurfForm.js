import React from 'react';

export default function SmurfForm(props) {
	return (
		<form>
			<input
				className="input"
				value={props.name}
				name="name"
				type="text"
				placeholder="Name"
				onChange={props.handleInputChange}
			/>
			<input
				className="input"
				value={props.age}
				name="age"
				type="text"
				placeholder="Smurf Age"
				onChange={props.handleInputChange}
			/>
			<input
				className="input"
				value={props.height}
				name="height"
				type="text"
				placeholder="Smurf Height"
				onChange={props.handleInputChange}
			/>
			<button onClick={props.createNewSmurf()} type="button">
				Add New Smurf
			</button>
		</form>
	);
}
