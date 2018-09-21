import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSmurf } from '../actions';

class SmurfForm extends Component {
    state = {
        name: '',
        age: '',
        height: '',
    };

    handleInputChange = event => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleCreateSmurf = () => {
        const {name, age, height} = this.state;
        this.props.creatSmurf({ name, age, height });
        this.setState({ name: '', age: '', height: ''});
    };

    render() {
        return (
            <form onSubmit={() => this.handleCreateSmurf()}>
                <input 
                    name='name'
                    type='text'
                    placeholder='Name'
                    value={this.state.name}
                    onChange={this.handleInputChange}
                />
                <input 
                    name='age'
                    type='text'
                    placeholder='Age'
                    value={this.state.age}
                    onChange={this.handleInputChange}
                />
                <input 
                    name='height'
                    type='text'
                    placeholder='Height'
                    value={this.state.height}
                    onChange={this.handleInputChange}
                />
                <input
                    type='submit'
                />
            </form>
        )
    }

}