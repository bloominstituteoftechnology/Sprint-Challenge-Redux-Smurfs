import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postSmurf } from '../actions';

class AddSmurf extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            height: ''
        };
    }
    handleInput = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    submitSmurf = event => {
        event.preventDefault();
        this.props.postSmurf({
            name: this.state.name,
            age: this.state.age,
            height: this.state.height 
        });
        this.setState({
            name: '',
            age: '',
            height: ''
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.submitSmurf}>
                <input
                onChange={this.state.name}
                placeholder="name"
                />
                <input
                onChange={this.handleInput}
                type="number"
                name="age"
                value={this.state.age}
                placeholder="age"
                />
                <input
                onChange={this.handleInput}
                type="height"
                name="height"
                value={this.state.height}
                placeholder="height"
                />
                <button type="submit">Add Smurf</button>
                </form>
                </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        savingSmurf: state.savingSmurf,
        error: state.error 
    };
};

const actions = {
    postSmurf 
};

export default connect(mapStateToProps, actions)(AddSmurf);