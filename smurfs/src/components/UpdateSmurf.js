import React from 'react'
import { connect } from 'react-redux'
import { updateSmurf } from '../actions'

class UpdateSmurf extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			age: '',
			height: '',
		}
	}

	componentDidMount() {
		const { smurfs, match } = this.props
		const smurf = smurfs.find((item) => item.id === Number(match.params.id))
		this.setState(smurf)
	}

	inputHandler = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		})
	}

	submitHandler = (event) => {
		event.preventDefault()
		this.props.updateSmurf(this.state)
	}

	render() {
		return (
			<form onSubmit={this.submitHandler}>
				<input
					type="text"
					name="name"
					placeholder="Enter Smurf Name"
					value={this.state.name}
					onChange={this.inputHandler}
				/>
				<input
					type="number"
					name="age"
					placeholder="Enter Smurf Age"
					value={this.state.age}
					onChange={this.inputHandler}
				/>
				<input
					type="number"
					name="height"
					placeholder="Enter Smurf Height"
					value={this.state.height}
					onChange={this.inputHandler}
				/>
				<button type="submit">Submit</button>
			</form>
		)
	}
}

const mapStateToProps = ({ smurfs }) => ({ smurfs })

export default connect(
	mapStateToProps,
	{ updateSmurf }
)(UpdateSmurf)
