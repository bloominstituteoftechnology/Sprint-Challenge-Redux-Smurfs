import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

class Smurfs extends Component {
	render() {
		return (
			<div>Hello there</div>
		);
	}
}

export default connect(null)(Smurfs);

//<div></div>
