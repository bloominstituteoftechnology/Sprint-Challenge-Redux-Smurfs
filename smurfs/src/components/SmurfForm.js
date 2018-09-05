import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSmurf } from '../actions';
import './SmurfForm.css';

class SmurfForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: '',
        };
    }

    handleAddSmurf = () => {
        const { name, age, height } = this.state; // Pulls name, age, height from this.state.
        const newSmurf = { name, age, height }; // Creates an object of those in const newSmurf.
        this.props.createSmurf(newSmurf); // Sends that object to props createSmurf.
        this.setState({ name: '', age: '', height: '' }); // Resets the state.
    };

    handleInputChange = e => { // Handler that takes the input and set it on state with the event.
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div className="Form">
                <input
                    onChange={this.handleInputChange} // Input handler.
                    className="Box-field"
                    value={this.state.name} // Value set to Smurf name.
                    name="name" // Name akin to their value.
                    placeholder="Smurf Name"
                />
                <input
                    onChange={this.handleInputChange} // Input handler.
                    className="Box-field"
                    value={this.state.age} // Value set to Smurf age.
                    name="age"
                    placeholder="Smurf Age"
                />
                <input
                    onChange={this.handleInputChange} // Input handler.
                    className="Box-field"
                    value={this.state.height} // Value set to Smurf height.
                    name="height"
                    placeholder="Smurf Height"
                />
                {/* Action createSmurf will be triggered by onClick */}
                <button onClick={this.handleAddSmurf}>Add Smurf</button>
            </div>
        );
    }
}

export default connect(null, { createSmurf })(SmurfForm);