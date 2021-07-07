import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSmurf } from '../actions'; 

class SmurfForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }
    handleAddSmurf = () => {
        const {name, age, height} = this.state;
        const newSmurf = { name, age, height }
        this.props.createSmurf(newSmurf);
        this.setState({ name: '', age: '', height: ''});
    };
    handleInputChange = e => {
      this.setState({ [e.target.name]: e.target.value });  
    };
    render() {
        return (
            <div>
                <input 
                onChange={this.handleInputChange}
                value={this.state.name}
                name="name" 
                placeholder="Smurf Name"
                />
                <input 
                onChange={this.handleInputChange}
                value={this.state.age}
                name="age" 
                placeholder="Smurf Age"
                />
                <input 
                onChange={this.handleInputChange}
                value={this.state.height}
                name="height" 
                placeholder="Smurf Height"
                />     
                <button onClick={this.handleAddSmurf}>Add Smurf</button>
            </div>
        );
    }
}

export default connect(null, { createSmurf })(SmurfForm);