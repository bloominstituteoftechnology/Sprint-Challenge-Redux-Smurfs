import React from 'react';
import { updateSmurf, submitUpdate, deleteSmurf } from '../actions/index.js';
import { connect } from 'react-redux';

class IndividualSmurf extends React.Component {
	constructor(props) {
		super(props);
		console.log('proppies' + this.props);
		this.state = {
			name: this.props.smurf.name,
			age: this.props.smurf.age,
			height: this.props.smurf.height,
			id: this.props.smurf.id
		};
	}

	//change handler, pass down
	changeHandlerName = e => {
		this.setState({ name: e.target.value });
	};
	changeHandlerAge = e => {
		this.setState({ age: e.target.value });
	};

	changeHandlerHeight = e => {
		this.setState({ height: e.target.value });
	};
	//submit handler, pass down

	submitHandler = e => {
		e.preventDefault();
		this.props.updateSmurf();
		this.props.submitUpdate(this.state);
	};

	deleteHandler = e => {
		e.preventDefault();
		this.props.deleteSmurf(this.state);
	};

	render() {
		return (
			<form>
				<input
					onChange={this.changeHandlerName}
					type="text"
					name="name"
					placeholder={this.state.name}
				/>
				<input
					onChange={this.changeHandlerAge}
					type="text"
					name="age"
					placeholder={this.state.age}
				/>
				<input
					onChange={this.changeHandlerHeight}
					type="number"
					name="height"
					placeholder={this.state.height}
				/>
				<button onClick={this.submitHandler}>SUBMIT CHANGES</button>
				<button onClick={this.deleteHandler}>DELETE THIS SMURF</button>
			</form>
		);
	}
}
// export default IndividualSmurf;

const mapStateToProps = state => {
	return {};
};

export default connect(
	mapStateToProps,
	{ updateSmurf, submitUpdate, deleteSmurf }
)(IndividualSmurf);
