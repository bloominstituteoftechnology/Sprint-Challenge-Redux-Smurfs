import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSmurf } from '../actions';

class AddSmurfForm extends Component {
	state = {
		name: '',
		age: '',
		height: ''
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const { name, age, height } = this.state;
		const id = this.props.id;
		this.props.updateSmurf(id, {name, age, height});
	};

	handleInput = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	}

	render () {
		return (
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						name="name"
						placeholder="name"
						value={this.state.name}
						onChange={this.handleInput}
					/>
					<input
						type="number"
						name="age"
						placeholder="age"
						value={this.state.age}
						onChange={this.handleInput}
					/>
					<input
						type="text"
						name="height"
						placeholder="height"
						value={this.state.height}
						onChange={this.handleInput}
					/>
					<button type="submit">Update Smurf</button>
				</form>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		updatingSmurf: state.smurfsReducer.updatingSmurf,
		error: state.smurfsReducer.error
	}
}

export default connect(mapStateToProps, { updateSmurf })(AddSmurfForm);
