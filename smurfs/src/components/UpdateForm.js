import React from "react";

class UpdateForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			age: "",
			height: "",
			id: this.props.id
		};
	}
	// update state with new smurf data
	handleNewInput = event => {
		this.setState({ [event.target.name]: [event.target.value] });
	};
	// trigger updateForm() action creator
	handleUpdateForm = () => {
		const smurf = {
			name: this.state.name,
			age: this.state.age,
			height: this.state.height
		};
		this.props.update(smurf);
		this.setState({ name: "", age: "", height: "" });
	};
	render() {
		// console.log("name: ", this.state.name);
		// console.log("age: ", this.state.age);
		// console.log("height: ", this.state.height);
		return (
			<form>
				<input
					type="text"
					name="name"
					placeholder="Enter smurf name"
					onChange={this.handleNewInput}
				/>
				<input
					type="text"
					name="age"
					placeholder="Enter smurf age"
					onChange={this.handleNewInput}
				/>
				<input
					type="text"
					name="height"
					placeholder="Enter smurf height"
					onChange={this.handleNewInput}
				/>
				<button
					type="button"
					onClick={() => {
						this.handleUpdateForm();
					}}
				>
					Save Changes
				</button>
			</form>
		);
	}
}

export default UpdateForm;
