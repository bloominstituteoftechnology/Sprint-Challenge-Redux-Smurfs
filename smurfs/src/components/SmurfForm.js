import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfs, addSmurf, deleteSmurf } from "../actions";

class SmurfForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			age: "",
			height: ""
		};
	}
	componentDidMount() {
		this.props.getSmurfs();
	}

	sendSmurf = (event) => {
		event.preventDefault();
		this.props.addSmurf(this.state);
		this.setState({
			name: "",
			age: "",
			height: ""
		});
	};

	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
		    <div>
				<ul>
					{this.props.smurfs.map((smurf) => {
						return (
							<li key={smurf.id}>
								<div>{smurf.name}</div>
								<div>{smurf.age}</div>
								<div>{smurf.height}</div>
								<button onClick={() => this.props.deleteSmurf(smurf.id)}>Delete Smurf</button>
							</li>
						);
					})}
                </ul>
			    <form onSubmit={this.sendSmurf}>
                    <input type="text" name="name" onChange={this.handleInputChange} value={this.state.name} />
                    <input type="text" name="age" onChange={this.handleInputChange} value={this.state.age} />
                    <input type="text" name="height" onChange={this.handleInputChange} value={this.state.height} />
                    <button type="submit">Add Smurf</button>
                </form>
             </div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		fetching: state.fetching,
		adding: state.adding,
		smurfs: state.smurfs,
		error: state.errorMessage
	};
};
export default connect(mapStateToProps, { addSmurf, getSmurfs, deleteSmurf })(SmurfForm);