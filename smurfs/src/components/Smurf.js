import React from "react";
import { connect } from "react-redux";
import { deleteSmurfs } from "../actions/";

const Smurf = props => {
	return [
		<li>{`Name: ${props.smurf.name}`}</li>,
		<li>{`Age: ${props.smurf.age}`}</li>,
		<li>{`Height: ${props.smurf.height}`}</li>,
		// WORK IN PROGRESS: DELETE not fully functional yet.
		<button
			onClick={() => {
				props.deleteSmurfs(props.smurf.id);
			}}
		>
			Delete Smurf
		</button>
	];
};

const mapStateToProps = state => {
	return {
		deletingSmurfs: state.deletingSmurfs
	};
};

export default connect(mapStateToProps, {
	deleteSmurfs
})(Smurf);
