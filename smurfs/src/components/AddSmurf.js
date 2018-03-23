import React, { Component } from 'react'
import { addSmurf } from '../actions/index'; 
import { connect } from 'react-redux';

class AddSmurfs extends Component {
    state = {
        name: '',
        age: '',
        height: ''
    }


    hundleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    };

    hundleAddSmurf = () => {
        this.props.addSmurf(this.state.name, this.state.age, this.state.height);
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
                type = 'text' 
                name = 'name' 
                value = {this.state.name}
                onChange = {this.hundleChange} 
            />
            <input 
                type = 'text' 
                name = 'age' 
                value = {this.state.age}
                onChange = {this.hundleChange} 
            />
            <input 
                type = 'text' 
                name = 'height' 
                value = {this.state.height}
                onChange = {this.hundleChange} 
            />
            <hr />
            <button onClick = {this.hundleAddSmurf}>Add</button>
        </div>
        )
    }
}

export default connect (null, { addSmurf })(AddSmurfs);
