import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions';
import './NewSmurfForm.css';


class NewSmurfForm extends Component {

        state = {
            newSmurfName: "",
            newSmurfAge: "", 
            newSmurfHeight: ""
        }
    
    handleNewSmurf = (e) => {
        this.setState({[e.target.name]: e.target.value});
    } 

    handleSubmitSmurf = (e) => {
        e.preventDefault();

        let newSmurf = {
            name: this.state.newSmurfName,
            age: this.state.newSmurfAge, 
            height: this.state.newSmurfHeight
        }

        this.props.addSmurf(newSmurf)
        this.setState({ newSmurfName: "", newSmurfAge: "", newSmurfHeight: ""})
    }

    render() {
        return (
            <form>

                <input type="text" placeholder="name" name="newSmurfName" value={this.state.newSmurfName} onChange={this.handleNewSmurf}>
                </input>
                
                <input type="text" placeholder="age" name="newSmurfAge" value={this.state.newSmurfAge} onChange={this.handleNewSmurf}>
                </input>

                <input type="text" placeholder="height" name="newSmurfHeight" value={this.state.newSmurfHeight} onChange={this.handleNewSmurf}>
                </input>

                <button onClick={this.handleSubmitSmurf}>Add Smurf</button>
                
            </form>
        )
            
        
    }
}



export default connect(null, { addSmurf })(NewSmurfForm); 