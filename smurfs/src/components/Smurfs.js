import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class Smurfs extends Component {


    render() {
        const { name, age, height } = this.props.smurf;
        return (
            <div>
                Name: {name},
                Height: {height},
                Age: {age}
            </div>
        )
    }
};

export default Smurfs;

