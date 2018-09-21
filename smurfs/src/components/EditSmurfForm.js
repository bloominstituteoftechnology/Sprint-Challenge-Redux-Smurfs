// React
import React from 'react';

export default class EditSmurfForm extends React.Component {
	state = {
		id: '',
		name: '',
		age: '',
		height: '',
	};

	componentDidMount() {
		this.setState({ 
			id: this.props.smurf.id,
			name: this.props.smurf.name,
			age: this.props.smurf.age,
			height: this.props.smurf.height,
		});
	}

	handleInputChange = e => {
		this.setState({ 
			...this.state, 
			[e.target.name]: e.target.value
		});
	}

	handleSubmit = e => {
		e.preventDefault();

		this.props.putSmurf({
			id: this.state.id,
			name: e.target[0].value,
			age: Number(e.target[1].value),
			height: e.target[2].value,
		});
	}

	render() {
		return(
			<form onSubmit = { this.handleSubmit }>
				Name:
				<input 
					name = 'name' 
					value = { this.state.name } 
					onChange = { this.handleInputChange }
				/>

				Age:
				<input 
					name = 'age' 
					type = 'number' 
					value = { this.state.age } 
					onChange = { this.handleInputChange }
				/>

				Height:
				<input 
					name = 'height' 
					value = { this.state.height } 
					onChange = { this.handleInputChange }
				/>

				<button type = 'submit'>Add to Smurf Village</button>
			</form>
		);
	}
}
