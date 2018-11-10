import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateSmurf } from '../actions';

class EditSmurfForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: 0,
            height: '',
            id: 0
        }
    }

    componentDidMount() {
        this.setState({
            name: this.props.name,
            age: this.props.age,
            height: this.props.height,
            id: this.props.id
        });
    }

    inputHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    submitHandler = (e) => {
        e.preventDefault()
        this.props.updateSmurf(this.state)
     }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
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

export default connect(mapStateToProps, { updateSmurf })(EditSmurfForm);