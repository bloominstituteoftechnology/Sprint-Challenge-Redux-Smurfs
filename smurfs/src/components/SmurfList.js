import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import Smurf from './Smurf';
// Actions
import { getSmurfs } from '../actions';

class SmurfList extends Component {
	componentDidMount() {
		this.props.getSmurfs();
	}

	render() {
		return (
			<div className="SmurfList">
				{this.props.gettingSmurfs ? (
					<p>Populating Village...</p>
				) : (
					<ul>
						{this.props.smurfs.length
							? this.props.smurfs.map(smurf => (
									<Smurf key={smurf.id} smurf={smurf} />
							  ))
							: !this.props.error
								? 'The village is empty.'
								: null}
					</ul>
				)}
				{this.props.error ? <p>{this.props.error}</p> : null}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	smurfs: state.smurfs,
	gettingSmurfs: state.gettingSmurfs,
	error: state.error
});

export default connect(
	mapStateToProps,
	{ getSmurfs }
)(SmurfList);
