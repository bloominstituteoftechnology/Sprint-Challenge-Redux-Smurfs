import React, { Component } from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

import { connect } from 'react-redux';
import { fetchSmurf, addSmurf } from '../actions';

import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';

class App extends Component {
	state = {
		name: '',
		age: '',
		height: '',
	};

	componentDidMount() {
		this.props.fetchSmurf();
	}

	handleInputChange = (event) => {
		this.setState({ [event.target.value.name]: event.target.value });
	};

	createNewSmurf = () => {
		const smurf = {
			name: this.state.name,
			age: this.state.age,
			height: this.state.height,
		};
		this.props.addSmurf(smurf);
	};

	render() {
		return (
			<div className="App">
				<h1>SMURFS! 2.0 W/ Redux</h1>
				<div>Welcome to your Redux version of Smurfs!</div>
				<SmurfForm
					createNewSmurf={this.createNewSmurf}
					handleInputChange={this.handleInputChange}
				/>
				<div>Smurf Residents</div>
				<SmurfList smurfs={this.props.smurf} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		smurfs: state.smurfs,
	};
};

export default connect(
	mapStateToProps,
	{ fetchSmurf, addSmurf }
)(App);
