import React from "react";
import { connect } from "react-redux";

class AddSmurfForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			smurfs: [],
			name: "",
			age: 0,
			height: "",
			id: 0
		};
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.addNewSmurf(this.state);
		this.setState({smurf: ''})
	};

	// handleDelete = event => {
	// 	event.preventDefault();
	// 	this.props.deleteSmurf();
	// }

	render() {
		console.log('FORM PROPS', this.props)
		return (
			<div>
				<h1>Smurf Form</h1>
				<div>
					<form onSubmit={this.addSmurf}>
						{/* <input
							onChange={this.handleChange}
							placeholder="id"
							value={this.props.id}
							name="id"
						/> */}
						<input
							onChange={this.handleChange}
							placeholder="name"
							value={this.props.name}
							name="name"
						/>
						<input
							onChange={this.handleChange}
							type="number"
							placeholder="age"
							value={this.props.age}
							name="age"
						/>
						<input
							onChange={this.handleChange}
							placeholder="height"
							value={this.props.height}
							name="height"
						/>
						<button onClick={this.handleSubmit}>
							Add Smurf
						</button>
						{/* {this.props.error !== null ? <h4>{this.props.error}</h4> : null} */}
					</form>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		smurfs: state.smurfs,
		pending: state.pending,
		error: state.error,
	};
}

export default connect(
	mapStateToProps,
	{
	}
)(AddSmurfForm);
