import React from "react";
import { connect } from "react-redux";
import { deleteSmurfs, updateSmurfs } from "../actions/";
import RaisedButton from "material-ui/RaisedButton";
import UpdateForm from "./UpdateForm";

class Smurf extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showUpdateForm: false
		};
	}
	render() {
		const style = {
			margin: 12
		};
		const { name, age, height, id } = this.props.smurf;
		return (
			<div>
				<p>{`Name: ${name}`}</p>
				<p>{`Age: ${age}`}</p>
				<p>{`Height: ${height}`}</p>
				<RaisedButton
					primary={true}
					style={style}
					type="button"
					onClick={() => {
						this.props.deleteSmurfs(id);
					}}
				>
					Delete Smurf
				</RaisedButton>
				{/* Button toggler for the update form*/}
				<RaisedButton
					primary={true}
					style={style}
					type="button"
					onClick={() => {
						this.setState({ showUpdateForm: !this.state.showUpdateForm });
					}}
				>
					Update smurf
				</RaisedButton>
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
