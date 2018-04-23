import React from "react";
import RaisedButton from "material-ui/RaisedButton";

const CreateSmurfForm = props => {
	const style = {
		margin: 12
	};
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
			<RaisedButton
				primary={true}
				style={style}
				type="button"
				onClick={() => {
					props.handleCreateSmurf();
				}}
			>
				Add Smurf
			</RaisedButton>
		</form>
	);
};

export default CreateSmurfForm;
