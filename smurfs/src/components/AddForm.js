import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurfs } from "../actions/index";
import "./App.css";

class AddFrom extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			age: 0,
			height: 0
		};
	}
	handleInput = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	addSmurf = e => {
		e.preventDefault();
		this.props.addSmurfs(this.state);
		this.setState(
			{
				name: "",
				age: 0,
				height: 0
			},
			() => {
				this.props.handleAdd();
			}
		);
	};
	render() {
		let { name, age, height } = this.state;
		return (
			<div className="modal">
				<form className="addFrom">
					<input
						type="text"
						placeholder="name"
						value={name}
						onChange={this.handleInput}
						name="name"
						required
					/>
					<input
						type="number"
						name="age"
						placeholder="Age"
						value={age}
						onChange={this.handleInput}
						required
					/>
					<input
						type="number"
						name="height"
						placeholder="height"
						value={height}
						onChange={this.handleInput}
						required
					/>
					<button
						type="submit"
						onClick={this.addSmurf}
						className="submit"
					>
						Add Smurf
					</button>
				</form>
			</div>
		);
	}
}

export default connect(
	null,
	{ addSmurfs }
)(AddFrom);
