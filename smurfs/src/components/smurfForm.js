import React, { Component } from "react";
import { connect } from "react-redux";

import { addSmurf, getSmurfs } from "../actions";

class SmurfForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			age: "",
			height: ""
		};
	}

	addSmurf = (event) => {
		event.preventDefault();
		this.props.addSmurf(this.state);
		this.setState({
			name: "",
			age: "",
			height: ""
		});
		setTimeout(() => {
			this.props.getSmurfs();
		}, 20);
	};

	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div>
				<form onSubmit={this.addSmurf}>
					<label>
						Name:
						<input
							type="text"
							name="name"
							placeholder="Name"
							onChange={this.handleInputChange}
							value={this.state.name}
						/>
					</label>
					<label>
						Age:
						<input
							type="text"
							name="age"
							placeholder="Age"
							onChange={this.handleInputChange}
							value={this.state.age}
						/>
					</label>
					<label>
						Height:
						<input
							type="text"
							name="height"
							placeholder="height"
							onChange={this.handleInputChange}
							value={this.state.height}
						/>
					</label>
					<button type="submit">add Smurf</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		smurfs: state.smurfs,
	};
};

export default connect(mapStateToProps, { getSmurfs, addSmurf })(SmurfForm);