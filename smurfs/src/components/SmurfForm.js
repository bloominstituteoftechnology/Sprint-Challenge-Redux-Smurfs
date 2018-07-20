import React, { Component } from 'react';

class SmurfForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            height: '',
        }
    }

    updateInputChange = e => {
        this.setState({ [e.target.name]: e.target.value} );
    }

    submitSmurf = e => {
        e.preventDefault();
        const smurf = {
            id: Math.random(),
            name: this.state.name,
            age: this.state.age,
            height: this.state.height,
        }
        this.setState({ name: '', age: '', heigh: '' })
    }

    render() {
        return (
            <form>
                <input
                    type='text'
                    placeholder='Name'
                    value={this.state.name}
                    name='name'
                    onChange={this.updateInputChange}
                />
                <input
                    type='number'
                    placeholder='Age'
                    value={this.state.age}
                    name='age'
                    onChange={this.updateInputChange}
                />
                <input
                    type='text'
                    placeholder='Height'
                    value={this.state.height}
                    name='height'
                    onChange={this.updateInputChange}
                />
                <button>Add New Smurf</button>
            </form>
        );
    }
}

export default SmurfForm;