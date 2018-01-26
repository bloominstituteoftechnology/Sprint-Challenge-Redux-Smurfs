import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions';

class SmurfInput extends Component {
    state={
        name: '',
        height: '',
        age: '',
    }

    inputChangeHandler = ({ target }) => {
        this.setState({
            [target.name]: target.value,
        })
    }

    formSubmitHandler = (e) => {
        e.preventDefault();
        this.props.addSmurf(this.state)
        this.setState({
            name: '',
            height: '',
            age: '',
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.formSubmitHandler}>
                    <input onChange={this.inputChangeHandler} placeholder='name' value={this.state.name} name='name'></input>
                    <input onChange={this.inputChangeHandler} placeholder='height' value={this.state.height} name='height'></input>
                    <input onChange={this.inputChangeHandler} placeholder='age' value={this.state.age} name='age'></input>
                    <button>Smurf Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { addSmurf })( SmurfInput );