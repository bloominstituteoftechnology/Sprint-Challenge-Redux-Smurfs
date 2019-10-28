import React from 'react'
import { addSmurf } from '../actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Form extends React.Component {
    constructor() {
		super()
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    handleChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value
		})
    }
    
    createSmurf = (evt) => {
        evt.preventDefault()
        
        const { name, age, height } = this.state

        this.props.addSmurf(name, age, height)
            .then(() => {
                this.props.history.push('/smurfs')
            })
            .catch((err => {
                console.log(err)
            })) 
    }

    render () {
        const { name, age, height } = this.state
        const {fetchingSmurfs, error} = this.state

        return (
            <form onSubmit={this.createSmurf}>
                {error && <p className='error'>{error}</p>}
				<h1>Create New Smurf</h1>

                <input type="text" name="name" placeholder="Name" value={name} onChange={this.handleChange} />
				<input type="number" name="age" placeholder="Age" value={age} onChange={this.handleChange} />
				<input type="text" name="height" placeholder="Height" value={height} onChange={this.handleChange} />

				{fetchingSmurfs ? <p>Loading...</p> : <button type="submit">Create Smurf</button>}
			</form>
        )
    }
}


const mapDispatchToProps = {
    addSmurf,
}

const mapStateToProps = (state) => ({
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error
})

export default withRouter(connect(
        mapStateToProps,
        mapDispatchToProps,
    )(Form)
)