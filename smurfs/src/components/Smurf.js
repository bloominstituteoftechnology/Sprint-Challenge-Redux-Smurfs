import React, { Component } from 'react';
// import { connect } from 'react-redux';

// import { editSmurfs } from '../actions/index.js';
// import { addSmurfs } from '../actions/index.js';

class Smurf extends Component {
    render() {
        const {name, age, height} = this.props.smurf; // Destructure our Smurf object from props.
        console.log(name, age, height);
        return (
            <div>
                {/* Makes a Smurfs profile. */}
                Name: {name}
                Height: {height}
                Age: {age}
            </div>
        );
    }
};

export default Smurf;