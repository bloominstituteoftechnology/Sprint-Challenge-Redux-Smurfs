import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/index';

class addSmurf extends React.Component {
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
					<input type="text" name="name" placeholder="Name" value={name} onChange={this.handleChange} required />
					
					<br />

					<input type="number" name="age" placeholder="Age" value={age} onChange={this.handleChange} required />

                    <br />
                    
                    <input type="number" name="height" placeholder="height" value={height} onChange={this.handleChange} required />

					<br />

					<button type="submit">Deposit</button>
				</form>
			</section>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		smurf: state.smurf
	}
}

const mapDispatchToProps = {
    addSmurf: addSmurf,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(addSmurf)