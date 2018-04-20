import React from "react";
import { connect } from "react-redux";
import { deleteSmurfs } from "../actions/";

const Smurf = props => {
	return (
		<div>
			<p>{`Name: ${props.smurf.name}`}</p>
			<p>{`Age: ${props.smurf.age}`}</p>
			<p>{`Height: ${props.smurf.height}`}</p>
			<button
				onClick={() => {
					props.deleteSmurfs(props.smurf.id);
				}}
			>
				Delete Smurf
			</button>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		deletingSmurfs: state.deletingSmurfs
	};
};

export default connect(mapStateToProps, {
	deleteSmurfs
})(Smurf);
