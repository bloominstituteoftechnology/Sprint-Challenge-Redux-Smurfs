import React, { Component } from 'react';
import {addSmurf } from '../actions';
import { connect } from 'react-redux';


class AddSmurf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''   
        }
    };


    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
        const newSmurf = this.state;
        this.props.addSmurf(newSmurf);
        this.setState({
            name: '',
            age: '',
            height: '' 
            });
        } 

render() {
    return(
        <div>
        <input placeholder='New Smurf Name' onChange={this.handleChange} value={this.state.name} name='name' />
        <input placeholder='New Smurf Age' onChange={this.handleChange} value={this.state.age} name='age' />
        <input placeholder='New Smurf Height' onChange={this.handleChange} value={this.state.height} name='height' />
        
        
        </div>
        <button onClick={this.handleSubmit}> Submit </button>
    )
}


}