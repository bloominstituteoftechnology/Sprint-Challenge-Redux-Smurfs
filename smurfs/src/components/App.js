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

	render() {
		return (
			<div className="App">
				<h1>SMURFS! 2.0 W/ Redux</h1>
				<div>Welcome to your Redux version of Smurfs!</div>
				<div>Start inside of your `src/index.js` file!</div>
				<div>Have fun!</div>
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
