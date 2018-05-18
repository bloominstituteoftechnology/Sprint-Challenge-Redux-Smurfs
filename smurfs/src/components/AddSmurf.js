import React, { Component } from 'react';
import axios from 'axios';

class AddSmurf extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '', 
            age: '',
            height: ''
         }
    }

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    populateVillage = () => {
        const newSmurf = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
        }

        axios
            .post(`http://localhost:3333/smurfs`, newSmurf)
            .then(newSmurf =>{
                this.setState({
                    name: '',
                    age: '',
                    height: ''
                })
            })
            .catch(err => {
                console.log("Error:", err);
            })
    }


    render() { 
        return ( 
            <div>
                <form className="new-villager">
                    <input type="text" onChange={this.handleInput} name="name" value={this.state.name} placeholder="SMURF"/>
                    <input type="number" onChange={this.handleInput} name="age" value={this.state.age} placeholder="SMURF"/>
                    <input type="text" onChange={this.handleInput} name="height" value={this.state.height} placeholder="SMURF"/>
                    <button onClick={this.populateVillage}>SMURF</button>
                </form>
            </div>
         )
    }
}
 
export default AddSmurf;