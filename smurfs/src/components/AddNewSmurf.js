import React, { Component } from 'react';
import { addSmurf } from '../actions';
import { connect } from 'react-redux';

class AddNewSmurf extends Component {
    state = {
        name: '',
        age: '',
        height: ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleAdd = () => {
        this.props.addSmurf(this.state);
        this.setState({
            name: '',
            age: '',
            height: ''
        })
    }

    render() {
        return (
            <div>
                <input placeholder='Name' value={this.state.name} onChange={this.handleChange} name='name' />
                <input placeholder='Age' value={this.state.age} onChange={this.handleChange} name='age' />
                <input placeholder='Height' value={this.state.height} onChange={this.handleChange} name='height' />
                <button onClick={this.handleAdd}>Add Smurf</button>
            </div>
        )
    }
}

export default connect(null, { addSmurf })(AddNewSmurf);