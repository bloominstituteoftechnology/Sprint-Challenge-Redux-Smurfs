import React, { Component } from 'react';
import { connect } from 'react-redux';
// Actions
import { updateSmurf, deleteSmurf } from '../actions';

class Smurf extends Component {
	state = { editing: false };

	editSmurf = () => {
		this.setState({
			name: this.props.smurf.name,
			age: this.props.smurf.age,
			height: this.props.smurf.height,
			editing: true
		});
	};

	changeHandler = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	submitHandler = event => {
		event.preventDefault();

		this.props.updateSmurf({
			id: this.props.smurf.id,
			name: this.state.name,
			age: this.state.age,
			height: this.state.height
		});

		this.setState({
			editing: false,
			name: undefined,
			age: undefined,
			height: undefined
		});
	};

	cancelHandler = () => {
		this.setState({
			editing: false,
			name: undefined,
			age: undefined,
			height: undefined
		});
	};

	render() {
		return !this.state.editing ? (
			<li className="Smurf">
				<h3>{this.props.smurf.name}</h3>
				<p>Age: {this.props.smurf.age}</p>
				<p>Height: {this.props.smurf.height}</p>

				<button onClick={this.editSmurf}>Modify smurf</button>

				<button onClick={() => this.props.deleteSmurf(this.props.smurf.id)}>
					Cull smurf
				</button>
			</li>
		) : (
			<form onSubmit={this.submitHandler}>
				<br />
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
				<input type="submit" value="Submit Modifications" />
				<button onClick={this.cancelHandler}>Cancel</button>
			</form>
		);
	}
}

export default connect(
	null,
	{ updateSmurf, deleteSmurf }
)(Smurf);
