import React, { Component } from 'react';
import './App.css';

class Smurf extends Component {
    render() {
    const { name, age, height, id } = this.props.smurf;
      return (
        <div className="smurf-attr" key={id}>
            Name: {name}{'  '}
            Age: {age}{'  '}
            Height: {height}{' '}
            </div>
    )
};
};

export default Smurf;