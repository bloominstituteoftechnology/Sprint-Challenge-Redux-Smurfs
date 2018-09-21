import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import Smurf from './Smurf';
// Actions
import { getSmurfs } from '../actions';

class SmurfList extends Component {
	componentDidMount() {
		this.props.fetchSmurfs();
	}

	render() {
		return (
			<div className="SmurfList">
				{this.props.gettingSmurfs ? (
					<p>Populating Village...</p>
				) : (
					<ul>
						{this.props.smurfs.length && !this.props.error
							? this.props.smurfs.map(smurf => {
									return <Smurf key={smurf.id} smurf={smurf} />;
							  })
							: 'The village is empty.'}
					</ul>
				)}
				{this.props.error ? <p>{this.props.error}</p> : null}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	smurfs: state.smurfs,
	fetching: state.fetching,
	error: state.error
});

export default connect(
	mapStateToProps,
	{ getSmurfs }
)(SmurfList);
