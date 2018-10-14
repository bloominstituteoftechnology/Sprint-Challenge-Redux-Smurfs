import React, { Component } from 'react';

class Smurf extends Component {
    render() {
        const { name, age, height, id } = this.props.smurf;
        return (
            <div>
                Name: {name}
                Height: {height}
                Age: {age} 
                ID: {id}
            </div>
        );
    }
}

export default Smurf;