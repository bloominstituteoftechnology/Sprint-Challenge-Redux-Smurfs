import React, { Component } from 'react';
import { connect } from 'react-redux';
// Actions
import { addSmurf } from '../actions';

class SmurfForm extends Component {
	state = {
		name: '',
		age: '',
		height: ''
	};

	submitHandler = event => {
		event.preventDefault();

		this.props.addSmurf({
			name: this.state.name,
			age: this.state.age,
			height: this.state.height
		});

		this.setState({
			name: '',
			age: '',
			height: ''
		});
	};

	changeHandler = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		return (
			<form onSubmit={this.submitHandler}>
				<br />
				<h3>New Smurf</h3>
				<input
					type="text"
					value={this.state.name}
					placeholder="Name"
					name="name"
					onChange={this.changeHandler}
					required
				/>
				<br />
				<br />
				<input
					type="text"
					value={this.state.age}
					placeholder="Age"
					name="age"
					onChange={this.changeHandler}
					required
				/>
				<br />
				<br />
				<input
					type="text"
					value={this.state.height}
					placeholder="Height"
					name="height"
					onChange={this.changeHandler}
					required
				/>
				<br />
				<br />
				<input type="submit" value="Add New Smurf" />
			</form>
		);
	}
}

export default connect(
	null,
	{ addSmurf }
)(SmurfForm);
