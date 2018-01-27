import React, { Component } from 'react';

import logo from '../assets/logo.svg';

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
		if (this.checkSmurf()) {
			const newSmurf = {};

			newSmurf.name = this.state.name;
			newSmurf.age = Number(this.state.age);
			newSmurf.height = this.state.height;

			this.CancelAddSmurfButtonClickHandler();

			this.props.addSmurfHandler(newSmurf);
		}
	};

	checkSmurf = _ => {
		const isOkayToAdd = true;

		if (
			this.state.name === '' &&
			this.state.age === '' &&
			this.state.height === ''
		) {
			window.alert('Please add name, age, and height');
			return !isOkayToAdd;
		} else if (this.state.name === '' && this.state.age === '') {
			window.alert('Please add name and age');
			return !isOkayToAdd;
		} else if (this.state.name === '' && this.state.height === '') {
			window.alert('Please add name and height');
			return !isOkayToAdd;
		} else if (this.state.age === '' && this.state.height === '') {
			window.alert('Please add age and height');
			return !isOkayToAdd;
		} else if (this.state.name === '') {
			window.alert('Please add name');
			return !isOkayToAdd;
		} else if (this.state.age === '') {
			window.alert('Please add age');
			return !isOkayToAdd;
		} else if (this.state.height === '') {
			window.alert('Please add height');
			return !isOkayToAdd;
		} else if (!this.state.height.includes(' cm')) {
			window.alert('Please add cm to height i.e. 11 cm');
			return !isOkayToAdd;
		}

		return isOkayToAdd;
	};

	render() {
		return (
			<div className="AddSmurf">
				{!this.state.isAddingSmurf ? (
					<div className="AddSmurfButtonContainer">
						<button
							className="AddSmurfButton"
							onClick={this.AddSmurfButtonClickHandler}
						>
							invite smurf
						</button>
						<div className="VillageRow">
							<img src={logo} className="VillagePicture" alt="village" />
							<img src={logo} className="VillagePicture" alt="village" />
							<img src={logo} className="VillagePicture" alt="village" />
							<img src={logo} className="VillagePicture" alt="village" />
							<img src={logo} className="VillagePicture" alt="village" />
							<img src={logo} className="VillagePicture" alt="village" />
							<img src={logo} className="VillagePicture" alt="village" />
						</div>
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
							<div className="InputForm__inputs">
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
							</div>

							<input
								className="AddSmurfConfirmButton"
								type="button"
								value="invite"
								onClick={this.addSmurfHandler}
							/>
						</form>
					</div>
				)}
			</div>
		);
	}
}

export default AddSmurf;
