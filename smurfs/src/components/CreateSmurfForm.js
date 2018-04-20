import React from "react";

const CreateSmurfForm = props => {
	return (
		<form>
			<input
				type="text"
				name="name"
				placeholder="Enter smurf name"
				onChange={props.handleNewInput}
			/>
			<input
				type="text"
				name="age"
				placeholder="Enter smurf age"
				onChange={props.handleNewInput}
			/>
			<input
				type="text"
				name="height"
				placeholder="Enter smurf height"
				onChange={props.handleNewInput}
			/>
			<button
				type="button"
				onClick={() => {
					props.handleCreateSmurf();
				}}
			>
				Create Smurf
			</button>
		</form>
	);
};

export default CreateSmurfForm;
