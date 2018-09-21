// React
import React from 'react';

// Components
import EditSmurfForm from './EditSmurfForm';

// Styles
import './Smurf.css';

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
			<div className = 'smurf-container fade-in'>
				<div className = 'smurf-div'>
					<p>Name: { this.state.name }</p>
					<p>Age: { this.state.age }</p>
					<p>Height: { this.state.height }</p>

					<button className = 'btn edit-btn' onClick = { this.toggleEditForm }>Edit { this.state.name }</button>
					<button className = 'btn delete-btn' onClick = { () => this.props.deleteSmurf(this.state.id) }>Delete { this.state.name }</button>

					{ this.state.toggleEditForm && <EditSmurfForm putSmurf = { this.putSmurf } smurf = { this.state } /> }
				</div>
			</div>
		);
	}
}

export default Smurf;
