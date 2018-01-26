import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, deleteSmurf } from '../actions';

class Smurfs extends Component {
	componentDidMount() {
		this.props.getSmurfs();
	}

	render() {
		// console.log('*******this.props', this.props);
		const { smurfs, fetchingSmurfs } = this.props;
		return (
			<div className='Smurfs'>
				{fetchingSmurfs ? (<h2>Loading...</h2>) :
					(<ul className='Smurfs-grid'>
						{smurfs.map((smurf) => {
							return (
								<div key={smurf.id} className='Smurf'>
									<li>
										<div>{smurf.name}</div>
										<div>{`Age: ${smurf.age}`}</div>
										<div>{`Height: ${smurf.height}`}</div>
									</li>
									<button onClick={() => deleteSmurf(smurf.id)}>Delete</button>
								</div>
							);
						})}
					</ul>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	// console.log('********state', state);
	return {
		smurfs: state.smurfsReducer.smurfs,
		fetchingSmurfs: state.smurfsReducer.fetchingSmurfs,
		deletingSmurf: state.smurfsReducer.deletingSmurf,
		error: state.smurfsReducer.error
	}
}

export default connect(mapStateToProps, { getSmurfs, deleteSmurf })(Smurfs);
