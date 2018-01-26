import React, { Component } from 'react';

import '../styles/EditSmurf.css';

class EditSmurf extends Component {
	state = {
		name: null,
		age: null,
		height: null,
	};

	componentWillMount() {
		this.setState({
			name: '',
			age: '',
			height: '',
		});
	}

	componentDidMount() {
		this.setState({
			name: this.props.smurf.name,
			age: this.props.smurf.age,
			height: this.props.smurf.height,
		});
	}

	handleInputChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	submitEditButtonClicked = _ => {
		if (this.checkFriend()) {
			const editedFriend = {};

			for (var property in this.state) {
				if (this.state[property] !== this.props.smurf[property])
					editedFriend[property] = this.state[property];
			}

			this.props.editSmurfHandler(editedFriend);
		}
	};

	checkFriend = _ => {
		return !Object.values(this.state).every(inp => inp === '');
	};

	render() {
		return (
			<div className="EditSmurf">
				<div>
					<div className="EditingSmurf">
						<form className="InputForm">
							<input
								className="AddSmurfInput"
								onChange={this.handleInputChange}
								type="text"
								name="name"
								value={this.state.name}
							/>

							<input
								className="AddSmurfInput"
								onChange={this.handleInputChange}
								type="number"
								min="1"
								name="age"
								value={this.state.age}
							/>

							<input
								className="AddSmurfInput"
								onChange={this.handleInputChange}
								type="text"
								name="height"
								value={this.state.height}
							/>

							<input
								className="editSmurfConfirmButton"
								type="button"
								value="submit"
								onClick={this.submitEditButtonClicked}
							/>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default EditSmurf;
