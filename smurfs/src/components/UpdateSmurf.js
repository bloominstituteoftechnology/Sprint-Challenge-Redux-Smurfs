import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateSmurf } from '../actions/index.js';

class UpdateSmurf extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: ''
        }
    }

    inputHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.updateSmurf(this.props.smurf.id, this.state);
        this.setState({
            age: ''
        });
    }

    render(){
        return (
            <form onSubmit={this.submitHandler}>
                <input
                    type='text'
                    name='age'
                    value={this.state.age}
                    onChange={this.inputHandler}
                    placeholder='New Smurf age'
                />
                <button type='submit'>Update Smurf age</button>
            </form>
        )
    }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {updateSmurf})(UpdateSmurf);