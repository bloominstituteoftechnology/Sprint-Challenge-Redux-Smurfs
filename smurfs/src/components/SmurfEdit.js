import React, { Component } from 'react';

const idStyle = {
	fontWeight: 'bold'
};
class SmurfdEdit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Name: '',
			Height: '',
			Age: ''
			// showUpdateNote: false
		};
	}
	render() {
        const { id, name, age, height } = this.props.smurf;
		return (
			<div>
				<li>
					<span style={idStyle}>Name: </span>
					{name}
				</li>
				<li>
					<span style={idStyle}>Age: </span>
					{age}
				</li>
				<li>
					<span style={idStyle}>Height: </span>
					{height}
				</li>
			</div>
		);
	}
}
export default SmurfdEdit;
