import React, { Component } from "react";
import "./App.css";
import { getSmurfs, addSmurf, deleteSmurf } from "../actions";
import { connect } from "react-redux";
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
			name: `Smurf ${Math.random()}`,
			age: `Smurf ${Math.random()}`,
			height: `Smurf ${Math.random()}`
		};
	}

	componentDidMount() {
		this.props.getSmurfs();
	}

	onSubmithandler(ev, smurf) {
		ev.preventDefault();
		this.props.addSmurf(smurf);

		this.setState({
			name: `Smurf ${Math.random()}`,
			age: `Smurf ${Math.random()}`,
			height: `Smurf ${Math.random()}`
		});
	}

	onDeleteHandler(ev, id) {
		ev.preventDefault();
		this.props.deleteSmurf(id);
	}

	handleInputChange = smurf => {
		this.setState({ [smurf.target.name]: smurf.target.value });
	};

	render() {
		return (
			<div className='App'>
				<form onSubmit={ev => this.onSubmithandler(ev, this.state)}>
					<input
						onChange={this.handleInputChange}
						placeholder='Smurf name'
						value={this.state.name}
						name='name'
					/>
					<input
						onChange={this.handleInputChange}
						placeholder='Smurf age'
						value={this.state.age}
						name='age'
					/>
					<input
						onChange={this.handleInputChange}
						placeholder='Smurf height'
						value={this.state.height}
						name='height'
					/>
					<button type='submit'>Add to the smurf village</button>
				</form>

				{this.props.smurfs.map(smurf => (
					<div key={smurf.id}>
						Name: {smurf.name}, Age: {smurf.age}, Heigh:{" "}
						{smurf.height}{" "}
						<button
							onClick={ev => this.onDeleteHandler(ev, smurf.id)}>
							{" "}
							<u>KILL THIS SMURF</u>{" "}
						</button>
					</div>
				))}
			</div>
		);
	}
}

export default connect(
	({ smurfs }) => ({ smurfs }),
	{
		getSmurfs,
		addSmurf,
		deleteSmurf
	}
)(App);
