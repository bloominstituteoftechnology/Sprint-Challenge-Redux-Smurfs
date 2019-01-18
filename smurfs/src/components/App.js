import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf, updateSmurf } from '../actions/index.js';
import IndividualSmurf from './IndividualSmurf.js';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			age: '',
			height: ''
		};
	}
	componentDidMount() {
		this.props.getSmurfs();
	}

	changeHandlerName = e => {
		this.setState({ name: e.target.value });
	};
	changeHandlerAge = e => {
		this.setState({ age: e.target.value });
	};

	changeHandlerHeight = e => {
		this.setState({ height: e.target.value });
	};

	submitHandler = e => {
		e.preventDefault();
		this.props.addSmurf(this.state);
		this.setState({
			name: '',
			age: '',
			height: ''
		});
	};

	updateClicked = (data, e) => {
		e.preventDefault();
		this.props.updateSmurf(data);
		console.log('updatingSmurf status=' + this.props.updatingSmurf);
		console.log('current props=' + this.props);
	};

	render() {
		if (this.props.fetching) {
			return <h1>Summoning Smurfs</h1>;
		}
		if (this.props.adding) {
			return <h1>adding your SMURF</h1>;
		}

		if (this.props.updating) {
			console.log('la laupdating=' + this.props.updating);
			return (
				<div>
					<h1>UPDATING A SMURF</h1>
					{console.log('candidate=' + this.props.candidate)}
					{this.props.smurfs.map(smurf => {
						if (smurf.id === this.props.candidate) {
							return <IndividualSmurf smurf={smurf} />;
						}
						return (
							<div>
								{smurf.name}
								&nbsp; {smurf.age}
								&nbsp; years old&nbsp;
								{smurf.height}
								&nbsp;
								<button onClick={e => this.updateClicked(smurf, e)}>
									UPDATE ME
								</button>
							</div>
						);
					})}
				</div>
			);
		}

		return (
			<div>
				{this.props.smurfs.map(smurf => {
					return (
						<div>
							{smurf.name}
							&nbsp; {smurf.age}
							&nbsp; years old&nbsp;
							{smurf.height}
							&nbsp;
							<button onClick={e => this.updateClicked(smurf, e)}>
								UPDATE ME
							</button>
						</div>
					);
				})}
				<form onSubmit={this.submitHandler}>
					<input
						onChange={this.changeHandlerName}
						type="text"
						name="name"
						placeholder="name"
						value={this.state.name}
					/>
					<input
						onChange={this.changeHandlerAge}
						type="number"
						name="age"
						placeholder="age"
						value={this.state.age}
					/>
					<input
						onChange={this.changeHandlerHeight}
						type="text"
						name="height"
						placeholder="height"
						value={this.state.height}
					/>
					<button>Add To The Village!</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log(state);
	return {
		fetching: state.fetchingSmurfs,
		smurfs: state.smurfs,
		error: state.error,
		adding: state.addingSmurf,
		updating: state.updatingSmurf,
		candidate: state.id
	};
};
export default connect(
	mapStateToProps,
	{ getSmurfs, addSmurf, updateSmurf }
)(App);
