import React from "react";
import { connect } from "react-redux";
import RaisedButton from "material-ui/RaisedButton";
import {
	Card,
	CardActions,
	CardHeader,
	CardMedia,
	CardTitle,
	CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
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
		const style = {
			margin: 12
		};
		const { name, age, height, id } = this.props.smurf;
		return (
			<Card>
				<CardHeader title={name} />
				<CardTitle title="Smurf Information" subtitle={`Smurf ${id}`} />
				<CardText>
					<p>{`Age: ${age}`}</p>
					<p>{`Height: ${height}`}</p>
				</CardText>
				<CardActions>
					<RaisedButton
						primary={true}
						style={style}
						type="button"
						onClick={() => {
							this.props.deleteSmurfs(id);
						}}
					>
						Delete
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
						Update
					</RaisedButton>
					{/* Show update form if boolean is true */}
					{this.state.showUpdateForm ? (
						<UpdateForm id={id} update={this.props.updateSmurfs} />
					) : null}
				</CardActions>
			</Card>
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
