import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfForm extends Component{ 
    state = {
        name: '',
        age: '',
        height: ''
    };
    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    };

    handleAddSmurf = x => {
        const { name, age, height } = this.state;
        this.props.addSmurf({ name, age, height });
        this.setState({ name: '', age: '', email: '' });
    };

    render() {
        return (
            <form>
                <input 
                type="text"
                name='name'
                value={this.state.name}
                placeholder='Name'
                onChange={this.handleInputChange}
                />
                <input 
                type="text"
                name='age'
                value={this.state.age}
                placeholder='Age'
                onChange={this.handleInputChange}
                />
                <input 
                type="text"
                name='height'
                value={this.state.height}
                placeholder='Height'
                onChange={this.handleInputChange}
                />
                <button onClick={() => this.handleAddSmurf()} type='button'>
                Add New Smurf
                </button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        error: state.error,
        addingSmurf: state.addingSmurf
    };
};

export default connect(mapStateToProps, { addSmurf })(SmurfForm);