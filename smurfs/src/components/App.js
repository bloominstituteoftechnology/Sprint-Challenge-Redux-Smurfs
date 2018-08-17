import React, { Component } from "react";
import "./App.css";

import { getSmurfs, addSmurf } from "../actions";
import { connect } from "react-redux";

const initState = {
	name: "",
	age: "",
	height: "",
};

class App extends Component {
	state = {
		name: "",
		age: "",
		height: "",
	};

	componentDidMount() {
		this.props.getSmurfs();
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		return (
			<div className="App">
				{this.props.gettingData ? (
					<div>Rounding up the smurfs</div>
				) : (
					this.props.data.map(smurf => {
						return (
							<div key={smurf.name}>
								<p>{smurf.name}</p>
								<p>{smurf.age}</p>
								<p>{smurf.height}</p>
							</div>
						);
					})
				)}
				{this.props.addingSmurf ? (
					<div>Adding your new smurf</div>
				) : (
					<form
						onSubmit={event => {
							event.preventDefault();
							this.props.addSmurf(this.state);
							this.setState(initState);
						}}
					>
						<div>
							<input
								onChange={this.handleChange}
								type="text"
								placeholder="Name"
								name="name"
								value={this.state.name}
							/>
						</div>
						<div>
							<input
								onChange={this.handleChange}
								type="number"
								placeholder="Age"
								name="age"
								value={this.state.age}
							/>
						</div>
						<div>
							<input
								onChange={this.handleChange}
								type="text"
								placeholder="Height"
								name="height"
								value={this.state.height}
							/>
							<button>Add Smurf</button>
						</div>
					</form>
				)}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	data: state.data,
	gettingData: state.gettingData,
	addingSmurf: state.addingSmurf,
});

export default connect(
	mapStateToProps,
	{ getSmurfs, addSmurf },
)(App);