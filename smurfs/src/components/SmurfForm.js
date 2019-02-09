import React from 'react'
import { connect } from 'react-redux'
import { addSmurf } from '../actions'

class SmurfForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            age: "",
            height: ""
        }
    }

    handleChange = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addSmurf(this.state)
        this.setState({ name:"", age:"", height:"" })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name="name"
                    value={this.state.name}
                    text="text"
                    placeholder="Name"
                    onChange={this.handleChange}
                />
                 <input
                    name="age"
                    value={this.state.age}
                    text="text"
                    placeholder="Age"
                    onChange={this.handleChange}
                />
                 <input
                    name="height"
                    value={this.state.height}
                    text="text"
                    placeholder="Height"
                    onChange={this.handleChange}
                />
                <button type="submit">Add</button>
            </form>
        )
    }
}

export default connect(null, { addSmurf })(SmurfForm)