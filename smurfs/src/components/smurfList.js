import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { deleteSmurf, getSmurfs } from "../actions";

class SmurfList extends Component {
	componentDidMount() {
		this.props.getSmurfs();
	}

	deleteSmurf = (id) => {
		this.props.deleteSmurf(id);
		setTimeout(() => {
		  this.props.getSmurfs();
		}, 20);
	};
	render() {
		return (
			<Fragment>
				{this.props.fetching ? (
					<p>Loading...</p>
				) : (
					<ul>
						{this.props.smurfs.map((smurf) => {
							return (
								<li key={smurf.id}>
									<div>{smurf.name}</div>
									<div>{smurf.age}</div>
									<div>{smurf.height}</div>
									<div>
										{/* <button onClick={() => this.handleEdit(smurf.id)}>Edit</button> */}
										<button onClick={() => this.deleteSmurf(smurf.id)}>
											Delete
										</button>
									</div>
								</li>
							);
						})}
					</ul>
				)}
			</Fragment>
		);
	}
};

const mapStateToProps = (state) => {
  return {
    fetching: state.fetchingSmurfs,
    deleting: state.deletingSmurfs,
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, {
  getSmurfs,
  deleteSmurf,
})(SmurfList);