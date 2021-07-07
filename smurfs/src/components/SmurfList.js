import React, { Component } from "react";
import { getSmurfs } from "../actions";
import { connect } from "react-redux";

class SmurfList extends Component {
	componentDidMount() {
		this.props.getSmurfs();
	}
	render() {
		return (
			<div className="friends-list">
				{this.props.smurfs.map(smurf => (
					<div className="friend" key={smurf.id}>
						<h3>Name: {smurf.name}</h3>
						<p>Age: {smurf.age}</p>
						<p>Height: {smurf.height}</p>
					</div>
				))}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { smurfs: state.smurfs };
};

export default connect(
	mapStateToProps,
	{ getSmurfs }
)(SmurfList);
