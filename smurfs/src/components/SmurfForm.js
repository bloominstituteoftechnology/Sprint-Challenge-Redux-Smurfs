import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions';

class SmurfForm extends Component {
    state = {
        name: '',
        age: '',
        height: ''
    }

    render() {
        return(
            <form type="submit" onSubmit={this.addSmurfEvent}>
                <input 
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleInput}
                />
                <input 
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={this.state.age}
                    onChange={this.handleInput}
                />
                <input 
                    type="text"
                    name="height"
                    placeholder="Height"
                    value={this.state.height}
                    onChange={this.handleInput}
                />

                <button type="submit">Submit Smurf</button>
            </form>
        )
    }

    handleInput = event => {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value});
    }

    addSmurfEvent = event => {
        event.preventDefault();
        const newSmurf = {name, age, height};
        this.props.addSmurf(newSmurf);
        this.setState({
            name: '',
            age: '',
            height: ''
        });
    }
}

export default SmurfForm;