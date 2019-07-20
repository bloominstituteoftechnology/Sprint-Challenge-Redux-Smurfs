import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/index';

class SmurfFrom extends React.Component {
	constructor() {
		super()
		this.state = {
			name: '',
			age: '',
			height: '',
		}
	}

    handleChange = (evt) => {
		evt.preventDefault()

		this.setState({
			[evt.target.name]: evt.target.value,
		})
    }
    
    submitSmurf = (evt) => {
		evt.preventDefault()

		const { name, age, height } = this.state
		this.props.addSmurf(name, age, height)

		this.setState({
			name: '',
            age: '',
            height:'',
		})
    }
    
    render() {
		const { name, age, height } = this.state

		return (
			<section>
				<h2>ADD A SMURF TO THE VILLAGE</h2>

				<form onSubmit={this.submitSmurf}>
					<input type="text" name="name" placeholder="Name" value={name} onChange={this.handleChange} />
					
					<br />

					<input type="number" name="age" placeholder="Age" value={age} onChange={this.handleChange} />

                    <br />
                    
                    <input type="number" name="height" placeholder="Height" value={height} onChange={this.handleChange} />

					<br />

					<button type="submit">Add</button>
				</form>
			</section>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		smurfs: state.smurfs
	}
}

const mapDispatchToProps = {
    addSmurf: addSmurf,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SmurfFrom)