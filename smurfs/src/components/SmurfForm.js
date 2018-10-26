import React, { Component } from 'react';

class SmurfForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            age: '',
            height: '',
         }
    }
    render() { 
        return ( 
            <div>
            <input 
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.onChange}
            />
            <input 
            type="text"
            name="age"
            placeholder="age"
            value={this.state.age}
            onChange={this.onChange}
            />
            <input 
            type="text"
            name="height"
            placeholder="height"
            value={this.state.height}
            onChange={this.onChange}
            />
            <button onClick={this.addSmurf}>Add</button>
            </div>
         );
    }
}
 
export default SmurfForm;