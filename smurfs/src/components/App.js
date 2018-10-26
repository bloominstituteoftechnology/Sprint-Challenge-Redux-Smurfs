import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf, deleteSmurf, updateSmurf } from '../actions';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			age: '',
			height: '',
			id: ''
		};
	}
	componentDidMount() {
		this.props.getSmurfs();
	}

	formHandler = (e) => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	addSmurf = (e) => {
		e.preventDefault();
		const { name, age, height } = this.state;
		this.props.addSmurf({
			smurf: {
				name,
				age,
				height
			}
		});
		this.setState({ name: '', age: '', height: '' });
	};

	deleteSmurf = (id) => {
		this.props.deleteSmurf(id);
	};

	updateSmurf = (id) => {
		const name = prompt('New Name?..');
		const age = prompt('New Age?..');
		const height = prompt('New Height?..');

		this.props.updateSmurf({
			[this.id]: id,
			[this.name]: name,
			[this.age]: age,
			[this.height]: height
		});
	};

	render() {
		return (
			<div className="App">
				<h1>SMURFS! 2.0 W/ Redux</h1>
				<div>Welcome to your Redux version of Smurfs!</div>
				<div>Start inside of your `src/index.js` file!</div>
				<div>Have fun!</div>
				<div className="form-wrapper">
					<form action="">
						<input
							type="text"
							onChange={this.formHandler}
							name="name"
							value={this.props.name}
							placeholder="Name.."
						/>

						<input
							type="text"
							onChange={this.formHandler}
							name="age"
							value={this.props.age}
							placeholder="Age.."
						/>

						<input
							type="text"
							onChange={this.formHandler}
							name="height"
							value={this.props.height}
							placeholder="Height.."
						/>
						<button onClick={this.addSmurf} name="Submit">
							Submit
						</button>
					</form>
				</div>
				{this.props.smurfs.map((smurf) => {
					return (
						<div className="smurfContainer" key={smurf.id}>
							<h3>Name: {smurf.name}</h3>
							<p>Age: {smurf.age}</p>
							<p>Height: {smurf.height}</p>
							<button onClick={() => this.deleteSmurf(smurf.id)}>X</button>
							<button onClick={() => this.updateSmurf(smurf.id)}>UpDate</button>
						</div>
					);
				})}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const { smurfReducer } = state;
	return {
		smurfs: smurfReducer.smurfs
	};
};

export default connect(mapStateToProps, {
	getSmurfs,
	addSmurf,
	deleteSmurf,
	updateSmurf
})(App);
