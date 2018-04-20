import React from "react";
import { connect } from "react-redux";
import { deleteSmurfs, updateSmurfs } from "../actions/";
import UpdateForm from "./UpdateForm";

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
				{this.state.showUpdateForm ? (
					<UpdateForm id={id} update={this.props.updateSmurfs} />
				) : null}
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
	deleteSmurfs,
	updateSmurfs
})(Smurf);
