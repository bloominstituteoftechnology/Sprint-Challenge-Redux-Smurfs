import React, { Component } from 'react';
import { addSmurf } from '../actions/index';
import { connect } from 'react-redux';
import { smurfReducer } from '../reducers/index';

class CreateSmurfForm extends Component {
    state = {
        name: '',
        age: '',
        height: '',
    };

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitSmurf = e => {
        e.preventDefault();
        this.props.addSmurf({
            name: this.state.name,
            age: this.state.age,
            height: this.state.height,
        });
        this.setState({
            name: '',
            age: '',
            height: '',
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.submitSmurf}>
                    <input onChange={this.handleInput} type="text" name="name" placeholder="Name" />
                    <input onChange={this.handleInput} type="number" name="age" placeholder="Age" />
                    <input onChange={this.handleInput} type="number" name="height" placeholder="Height in CM" />
                    <button type="submit"> Add Smurf </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        addingSmurf: state.addingSmurf,
        error: state.error,
    }
    
}    

export default connect(mapStateToProps, { addSmurf }) (CreateSmurfForm);
    