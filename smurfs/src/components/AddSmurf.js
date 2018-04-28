import React, { Component } from 'react';
import { createSmurf } from '../actions';
import { connect } from 'react-redux';

class AddSmurf extends Component {
    state = {
        name:'',
        age: '',
        height: ''
    }
handleChange = e => {
    this.setState( { [e.target.name]: e.target.value });
}

handleSubmit = e => {
    e.preventDefault();
    this.props.createSmurf(this.state);
    this.setState({
        name: '',
        age: '',
        height: ''
    })
}



render() {
    return (
        <div>
            <input
                placeholder="New Smurf Name"
                onChange={this.handleChange}
                value={this.state.name}
                name="name"
            />
            <input
                placeholder="New Smurf Age"
                onChange={this.handleChange}
                value={this.state.age}
                name="age"
            />
            <input
                placeholder="New Smurf Height"
                onChange={this.handleChange}
                value={this.state.height}
                name="height"
            />
            <button onClick={this.handleSubmit}>Submit</button>
        </div>
        )
    }   

}

export default connect(null, { createSmurf }) (AddSmurf);
