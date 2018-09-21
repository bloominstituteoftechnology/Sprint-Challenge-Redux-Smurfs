import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurfs } from '../actions';

class AddSmurf extends Component {
  
  state = {
    name: '',
    age: '',
    height: '',
}

	handleChange = event => {
		event.preventDefault();
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	addNewSmurf = event => {
    event.preventDefault();
    this.props.addSmurfs(this.state);
    this.setState({ name: '', age: '', height: '' });
	};

	render() {
		return (
			<div>
				<form>
					<label>Name:</label>
					<input
						type='text'
						value={this.state.name}
						name='name'
						onChange={this.handleChange}
						placeholder='Name'
					/>
					<label>Age:</label>
					<input
						type='number'
						name='age'
						value={this.state.age}
						onChange={this.handleChange}
						placeholder='Age'
					/>
					<label>Height:</label>
					<input
						type='text'
						name='height'
						value={this.state.height}
						onChange={this.handleChange}
						placeholder='height'
					/>
					<button onClick={this.addNewSmurf}>Submit</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	smurfs: state.smurfs
});

export default connect(
	mapStateToProps,
	{ addSmurfs }
)(AddSmurf);