import React from "react";
import { connect } from "react-redux";
import { deleteSmurfs } from "../actions/";

// convert to class component
// change props to this.props
// destructure values from this.props
// create a showUpdateForm: false boolean

class Smurf extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showUpdateForm: false
		};
	}
	render() {
		const { name, age, height, id } = this.props.smurf;
		return (
			<div>
				<p>{`Name: ${name}`}</p>
				<p>{`Age: ${age}`}</p>
				<p>{`Height: ${height}`}</p>
				<button
					type="button"
					onClick={() => {
						this.props.deleteSmurfs(id);
					}}
				>
					Delete Smurf
				</button>
				{/* Button toggler for the update form*/}
				<button
					type="button"
					onClick={() => {
						this.setState({ showUpdateForm: !this.state.showUpdateForm });
					}}
				>
					Update smurf
				</button>
				{/* Show update form if boolean is true */}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		deletingSmurfs: state.deletingSmurfs
	};
};

export default connect(mapStateToProps, {
	deleteSmurfs
})(Smurf);
