import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSmurf } from '../actions';


class AddSmurf extends Component {
    state = {
        name: '',
        age: '',
        height: ''
    }

    handleSmurfInput = e => {
        // e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleClick = e => {
        this.props.createSmurf(this.state);
        this.setState({
            name: '',
            age: '',
            height: ''
        });
    };

    render() {
        return (
            <div>
                <div className="form">
                    <input onChange={this.handleSmurfInput} value={this.state.name} name='name' placeholder="Name" />
                    <input onChange={this.handleSmurfInput} value={this.state.age} name='age' placeholder="Age" />
                    <input onChange={this.handleSmurfInput} value={this.state.height} name='height' placeholder="Height" />
                    <button onClick={this.handleClick}
                    >Add Smurf
                    </button>
                </div>
            </div>
        )
    }
}

export default connect(null, { createSmurf })(AddSmurf);