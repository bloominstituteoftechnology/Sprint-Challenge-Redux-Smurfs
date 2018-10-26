import React from 'react'

class SmurfForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            smurf: {
                name: '',
                age: '',
                height: ''
            }
        }
    }

    handleChange = event => {
        this.setState({
            smurf: { 
            ...this.state.smurf,
            [event.target.name]: event.target.value
            }
        })
    }

    handleAddSmurf = event => {
        event.preventDefault()
        this.props.addSmurf(this.state.smurf)
    }


    render() {
        return (
            <div>
                <input 
                name="name"
                placeholder="...Smurfy name"
                type="text"
                value={this.state.smurf.name}
                onChange={this.handleChange}
                />
                 <input 
                name="height"
                placeholder="...Smurfy height"
                type="text"
                value={this.state.smurf.height}
                onChange={this.handleChange}
                />
                 <input 
                name="age"
                placeholder="...Smurfy age"
                type="text"
                value={this.state.smurf.age}
                onChange={this.handleChange}
                />
                
                <button onClick={this.handleAddSmurf}>Add Smurf</button>
                
            </div>
        )
    }

}

export default SmurfForm;