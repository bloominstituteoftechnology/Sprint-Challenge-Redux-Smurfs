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
				<input
					type="text"
					value={this.state.name}
					name="name"
					onChange={this.changeHandler}
					required
				/>
				<input
					type="text"
					value={this.state.age}
					name="age"
					onChange={this.changeHandler}
					required
				/>
				<input
					type="text"
					value={this.state.height}
					name="height"
					onChange={this.changeHandler}
					required
				/>
				<input type="submit" value="Add New Smurf" />
			</form>
		);
	}
}

export default connect(
	null,
	{ addSmurf }
)(SmurfForm);
