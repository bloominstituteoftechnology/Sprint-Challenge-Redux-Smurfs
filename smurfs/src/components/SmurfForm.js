import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/index';

class SmurfForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    addSmurf = event => {
        console.log('submit successful')
        event.preventDefault()
        const newSmurf = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
        }

        this.props.addSmurf(newSmurf)

        this.setState({
            name: '',
            age: '',
            height: ''
        })
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addSmurf}>
                    <input
                        placeholder='Name'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />
                    <input
                        placeholder='Age'
                        name='age'
                        value={this.state.age}
                        onChange={this.handleInputChange}
                    />
                    <input
                        placeholder='Height'
                        name='height'
                        value={this.state.height}
                        onChange={this.handleInputChange}
                    />
                    <button type='submit'>Add a Smurf!</button>
                </form>
            </div>
        )
    }
}

const mstp = state => {
    return {}
}

export default connect(mstp, { addSmurf })(SmurfForm);