// React
import React from 'react';

// Components
import EditSmurfForm from './EditSmurfForm';

class Smurf extends React.Component {
	state = {
		id: '',
		name: '',
		age: '',
		height: '',
		toggleEditForm: false,
	};

	componentDidMount() {
		this.setState({
			id: this.props.smurf.id,
			name: this.props.smurf.name,
			age: this.props.smurf.age,
			height: this.props.smurf.height,
		});
	}

	toggleEditForm = () => this.setState({ ...this.state, toggleEditForm: !this.state.toggleEditForm });

	putSmurf = smurf => {
		this.props.putSmurf(smurf);
		this.toggleEditForm();
	}

	render() {
		return(
			<div>
				<p>Name: { this.state.name }</p>
				<p>Age: { this.state.age }</p>
				<p>Height: { this.state.height }</p>

				<button onClick = { this.toggleEditForm }>Edit { this.state.name }</button>

				{ this.state.toggleEditForm && <EditSmurfForm putSmurf = { this.putSmurf } smurf = { this.state } /> }
			</div>
		);
	}
}

export default Smurf;
