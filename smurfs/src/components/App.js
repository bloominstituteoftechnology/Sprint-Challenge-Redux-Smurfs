// React
import React, { Component } from 'react';

// Dependencies
import { connect } from 'react-redux';

// Components
import Smurf from './Smurf';

// Actions
import { getSmurfs } from '../actions';

// Styles
import './App.css';

/*
	to wire this component up you're going to need a few things.
	I'll let you do this part on your own. 
	Just remember, `how do I `connect` my components to redux?`
	`How do I ensure that my component links the state to props?`
*/

class App extends Component {
	componentDidMount() {
		this.props.getSmurfs();
	}

	render() {
		return (
			<div className = 'App'>
				<h1>Welcome to Smurf Village!</h1>
				{ this.props.getSmurfsErrorMsg && <p>GET '/smurfs' { this.props.getSmurfsErrorMsg }</p> }

				{ this.props.getSmurfsMsg ? <p>{ this.props.getSmurfsMsg }</p> : this.props.smurfs.map((smurf, i) => <Smurf key = { i } smurf = { smurf } />)}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	smurfs: state.smurfs,
	getSmurfsErrorMsg: state.getSmurfsErrorMsg,
	getSmurfsMsg: state.getSmurfsMsg,
});

export default connect(mapStateToProps, { getSmurfs })(App);
