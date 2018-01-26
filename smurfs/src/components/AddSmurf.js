import React, { Component } from 'react';

import '../styles/AddSmurf.css';

class AddSmurf extends Component {
	state = {
		name: null,
		age: null,
		height: null,
		isAddingSmurf: null,
	};

	componentWillMount() {
		this.setState({ name: '', age: '', height: '', isAddingSmurf: false });
	}

	AddSmurfButtonClickHandler = _ => {
		this.setState({ isAddingSmurf: true });
	};

	CancelAddSmurfButtonClickHandler = _ => {
		this.setState({
			name: '',
			age: '',
			height: '',
			isAddingSmurf: false,
		});
	};

	handleInputChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	addSmurfHandler = _ => {
		// if (this.checkSmurf()) {
		const newSmurf = {};

		newSmurf.name = this.state.name;
		newSmurf.age = Number(this.state.age);
		newSmurf.height = this.state.height;

		this.CancelAddSmurfButtonClickHandler();

		this.props.addSmurfHandler(newSmurf);
		// }
	};

	// checkSmurf = _ => {
	// 	const isOkayToAdd = true;

	// 	for (let i = 0; i < this.props.SmurfKeys.length; i++) {
	// 		const height = this.props.SmurfKeys[i];

	// 		if (height === this.state.height) {
	// 			window.alert("New Smurf's height already exists in database.");
	// 			return !isOkayToAdd;
	// 		}
	// 	}

	// 	if (
	// 		this.state.name === '' &&
	// 		this.state.age === '' &&
	// 		this.state.height === ''
	// 	) {
	// 		window.alert("Please add Smurf's name, age, and height");
	// 		return !isOkayToAdd;
	// 	} else if (this.state.name === '' && this.state.age === '') {
	// 		window.alert("Please add Smurf's name and age");
	// 		return !isOkayToAdd;
	// 	} else if (this.state.name === '' && this.state.height === '') {
	// 		window.alert("Please add Smurf's name and height");
	// 		return !isOkayToAdd;
	// 	} else if (this.state.age === '' && this.state.height === '') {
	// 		window.alert("Please add Smurf's age and height");
	// 		return !isOkayToAdd;
	// 	} else if (this.state.name === '') {
	// 		window.alert("Please add Smurf's name");
	// 		return !isOkayToAdd;
	// 	} else if (this.state.age === '') {
	// 		window.alert("Please add Smurf's age");
	// 		return !isOkayToAdd;
	// 	} else if (this.state.height === '') {
	// 		window.alert("Please add Smurf's height");
	// 		return !isOkayToAdd;
	// 	} else if (
	// 		!this.state.height.includes('@') &&
	// 		!this.state.height.includes('.')
	// 	) {
	// 		window.alert("Please check Smurf's height for @ and .");
	// 		return !isOkayToAdd;
	// 	} else if (!this.state.height.includes('@')) {
	// 		window.alert("Please check Smurf's height for @");
	// 		return !isOkayToAdd;
	// 	} else if (!this.state.height.includes('.')) {
	// 		window.alert("Please check Smurf's height for .");
	// 		return !isOkayToAdd;
	// 	} else if (this.state.height.length < 7) {
	// 		window.alert('Please enter a valid height');
	// 		return !isOkayToAdd;
	// 	}

	// 	return isOkayToAdd;
	// };

	render() {
		return (
			<div className="AddSmurf">
				<div>
					{!this.state.isAddingSmurf ? (
						<div className="AddSmurfButtonContainer">
							<button
								className="AddSmurfButton"
								onClick={this.AddSmurfButtonClickHandler}
							>
								add Smurf
							</button>
						</div>
					) : (
						<div className="IsAddingSmurf">
							<button
								className="CancelAddSmurfButton"
								onClick={this.CancelAddSmurfButtonClickHandler}
							>
								cancel
							</button>

							<form className="InputForm">
								<input
									className="AddSmurfInput"
									onChange={this.handleInputChange}
									type="text"
									name="name"
									value={this.state.name}
									placeholder="name"
								/>

								<input
									className="AddSmurfInput"
									onChange={this.handleInputChange}
									type="number"
									min="1"
									name="age"
									value={this.state.age}
									placeholder="age"
								/>

								<input
									className="AddSmurfInput"
									onChange={this.handleInputChange}
									type="text"
									name="height"
									value={this.state.height}
									placeholder="height"
								/>

								<input
									className="AddSmurfConfirmButton"
									type="button"
									value="submit"
									onClick={this.addSmurfHandler}
								/>
							</form>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default AddSmurf;
