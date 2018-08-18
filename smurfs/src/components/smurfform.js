import React, {Component} from 'react';
import {addSmurf} from '../actions'
import { connect } from 'react-redux';

class SmurfForm extends Component{
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    handleSmurfChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    addSmurfItem = (e) => {
        e.preventDefault();
        this.props.addSmurf(this.state);
        this.setState({
            name: '',
            age: '',
            height: ''
        });
    }

    render() {
    return (  
        <form onSubmit={this.addSmurfItem}>
            <input onChange={this.handleSmurfChange} type="text" placeholder="Name" name="name" value={this.state.name}/>
            <input onChange={this.handleSmurfChange} type="number" placeholder="Age" name="age" value={this.state.age}/>
            <input onChange={this.handleSmurfChange} type="text" placeholder="Height" name="height" value={this.state.height}/>
            <button type="submit">Add Smurf</button>
        </form>
    );
    }
}
 
export default connect(null, { addSmurf })(SmurfForm);