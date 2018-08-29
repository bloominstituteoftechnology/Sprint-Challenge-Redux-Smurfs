import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSmurf } from '../actions';

class SmurfForm extends Component {
    constructor(props) {    // create our state 
        super(props);
        this.state = {  
            name: '',
            age: '', 
            height: ''
        };
    }

    handleAddSmurf = () => {
        const { name, age, height } = this.state;   // pull name, age, height from this.state
        const newSmurf = { name, age, height }  // create an object of those in const newSmurf
        this.props.createSmurf(newSmurf);   // send that object to props createSmurf
        this.setState({ name: '', age: '', height: '' });     // reset the state
    };

    handleInputChange = e => {  // handler to take the input and set it on state with the event
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div>
                <input 
                    onChange={this.handleInputChange} // input handler
                    value={this.state.name} // value set to smurf name
                    name="name"     // name akin to their value
                    placeholder="Smurf Name"
                />
                <input 
                    onChange={this.handleInputChange} // input handler
                    value={this.state.age} // value set to smurf age
                    name="age"  // name akin to their value
                    placeholder="Smurf Age"
                />
                <input 
                    onChange={this.handleInputChange} // input handler
                    value={this.state.height}  // value set to smurf height
                    name="height"  // name akin to their value
                    placeholder="Smurf Height"
                />
                {/* action createSmurf will be triggered by onClick */}
                <button onClick={this.handleAddSmurf}>Add Smurf</button>  
            </div>
        );
    }
}

export default connect(null, { createSmurf })(SmurfForm);