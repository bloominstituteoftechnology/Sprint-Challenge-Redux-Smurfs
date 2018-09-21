// React
import React, { Component } from 'react';

// Dependencies
import { connect } from 'react-redux';

// Components
import Smurf from './Smurf';
import AddSmurfForm from './AddSmurfForm';

// Actions
import { getSmurfs, postNewSmurf, putSmurf } from '../actions';

// Styles
import './App.css';

/*
	to wire this component up you're going to need a few things.
	I'll let you do this part on your own. 
	Just remember, `how do I `connect` my components to redux?`
	`How do I ensure that my component links the state to props?`
*/

class App extends Component {
	state = {
		addSmurf: false,
		buttonText: 'Add Smurf'
	};

	componentDidMount() {
		this.props.getSmurfs();
	}

	toggleSetState = () => {
		return this.setState({ ...this.state, addSmurf: !this.state.addSmurf, buttonText: this.state.addSmurf ? 'Add Smurf' : 'Go to Smurf Village' });
	}

	toggleAddSmurf = e => {
		e.preventDefault();

		return this.toggleSetState();
	}

	postSmurf = smurf => {
		this.props.postNewSmurf(smurf);
		this.toggleSetState();
	}

	putSmurf = smurf => {
		this.props.putSmurf(smurf);
		window.location.reload();
	}

	render() {
		return (
			<div className = 'App'>
				<h1>Welcome to Smurf Village!</h1>
				
				<button onClick = { this.toggleAddSmurf }>{ this.state.buttonText }</button>

				{ this.props.getSmurfsErrorMsg && <p>GET '/smurfs' { this.props.getSmurfsErrorMsg }</p> }
				{ this.props.postSmurfErrorMsg && <p>POST '/smurfs' { this.props.postSmurfErrorMsg }</p> }
				{ this.props.putSmurfErrorMsg && <p>PUT '/smurfs' { this.props.putSmurfErrorMsg }</p> }

				{ this.state.addSmurf ? <AddSmurfForm postSmurf = { this.postSmurf } /> : this.props.getSmurfsMsg ? <p>{ this.props.getSmurfsMsg }</p> : this.props.smurfs.map((smurf, i) => <Smurf key = { i } smurf = { smurf } putSmurf = { this.putSmurf } />)}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	smurfs: state.smurfs,
	getSmurfsErrorMsg: state.getSmurfsErrorMsg,
	getSmurfsMsg: state.getSmurfsMsg,
	postSmurfErrorMsg: state.postSmurfErrorMsg,
	putSmurfErrorMsg: state.putSmurfErrorMsg,
});

export default connect(mapStateToProps, { getSmurfs, postNewSmurf, putSmurf })(App);
