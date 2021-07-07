import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

class AddSmurf extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			age: null,
			height: ""
		};
	}

	handleChange = event => {
		event.preventDefault();
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	addNewSmurf = event => {
		event.preventDefault();
		{
			console.log(this.state);
		}
		this.props.addSmurf(this.state);
	};

	render() {
		return (
			<div>
				<form>
					<label>Name:</label>
					<input
						type="text"
						value={this.state.inputName}
						name="name"
						onChange={this.handleChange}
						placeholder="Name"
					/>
					<label>Age:</label>
					<input
						type="number"
						name="age"
						value={this.state.inputAge}
						onChange={this.handleChange}
						placeholder="Age"
					/>
					<label>Height:</label>
					<input
						type="text"
						name="height"
						value={this.state.inputHeight}
						onChange={this.handleChange}
						placeholder="Height"
					/>

					<button onClick={this.addNewSmurf}>Add Friend!</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	smurfs: state.smurfs
});

export default connect(
	mapStateToProps,
	{ addSmurf }
)(AddSmurf);
