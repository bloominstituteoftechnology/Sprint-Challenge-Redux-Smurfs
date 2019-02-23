import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions';

class AddSmurfForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: 0,
            height: ''
        }
    }

    inputHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    submitHandler = (e) => {
        e.preventDefault()
        this.props.addSmurf(this.state)
     }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <h2>Add Smurf</h2>
                <input type="text" name="name" value={this.state.name} onChange={this.inputHandler} placeholder="Name"/>
                <input type="text" name="age" value={this.state.age} onChange={this.inputHandler} placeholder="Age"/>
                <input type="text" name="height" value={this.state.height} onChange={this.inputHandler} placeholder="Height"/>
                <button type="submit">Update</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { addSmurf })(AddSmurfForm);