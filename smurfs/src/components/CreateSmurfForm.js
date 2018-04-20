import React, { Component } from "react";

const CreateSmurfForm = props => {
	// a smurf has the form {name: "", age: "", height: "", id: num }
	return (
		<form>
			<input
				type="text"
				name="name"
				placeholder="Enter smurf name"
				onChange={}
			/>
			<input
				type="text"
				name="age"
				placeholder="Enter smurf age"
				onChange={}
			/>
			<input
				type="text"
				name="height"
				placeholder="Enter smurf height"
				onChange={}
			/>
			<button type="button" onClick={}></button>
		</form>
	);
};

export default CreateSmurfForm;
