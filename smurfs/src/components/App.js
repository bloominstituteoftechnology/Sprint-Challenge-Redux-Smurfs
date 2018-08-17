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
				{this.props.data.map(smurf => {
					return (
						<div key={smurf.name}>
							<p>{smurf.name}</p>
							<p>{smurf.age}</p>
							<p>{smurf.height}</p>
						</div>
					);
				})}
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
