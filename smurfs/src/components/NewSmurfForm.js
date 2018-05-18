import React, { Component } from 'react';


class NewSmurfForm extends Component {

        state = {
            newSmurfName: "",
            newSmurfAge: "", 
            newSmurfHeight: ""
        }
    
    handleNewSmurf = (e) => {
        this.setState({[e.target.name]: e.target.value});
    } 

    handleSubmitSmurf = () => {
        this.setState({ newSmurfName: "", newSmurfAge: "", newSmurfHeight: ""})
    }

    render() {
        return [
            <form>

                <input type="text" placeholder="name" name="newSmurfName" value={this.state.newSmurfName} onChange={this.handleNewSmurf}>
                </input>,
                
                <input type="text" placeholder="age" name="newSmurfAge" value={this.state.newSmurfAge} onChange={this.handleNewSmurf}>
                </input>,

                <input type="text" placeholder="height" name="newSmurfHeight" value={`${this.state.newSmurfHeight} cm`} onChange={this.handleNewSmurf}>
                </input>

                <button onClick={this.handleSubmitSmurf}>Add Smurf</button>
                
            </form>
        ]
            
        
    }
}



export default NewSmurfForm; 