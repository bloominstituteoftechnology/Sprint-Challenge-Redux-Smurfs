import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addSmurf } from '../actions/index'



class AddSmurf extends Component {

    constructor: (props) {
        super(props)
        this.state = {
            name: '',
            age: '',
            size: ''
        }
    }

    inputHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" name='name' value='this.state.name' onClick={this.inputHandler} placeholder='Smurf Name' />
                <input type="number" name='age' value='this.state.age' onClick={this.inputHandler} placeholder='Smurf Age' />
                <input type="number" name='size' value='this.state.size' onClick={this.inputHandler} placeholder='Smurf Size' />
                <button type='submit'>Add Smurf</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, {addSmurf : addSmurf}) (AddSmurf)