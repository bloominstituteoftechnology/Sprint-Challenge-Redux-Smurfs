import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions/index';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            smurf: {
                name: "",
                age: "",
                height: ""
            }
        }
    }

    handleChange = e => {
        this.setState({
            smurf: {
                ...this.state.smurf,
                [e.target.name]: e.target.value
            }
        });
    }

    render() {
        return(
            <div>
         
            <h4 >Add another Smurf:</h4>
            <input 
                type="text"
                placeholder="Smurfs Name" 
                name="name"
                onChange={this.handleChange}
                value={this.state.smurf.name}
                />
            <input 
                type="text" 
                name="age"
                placeholder="Age"
                onChange={this.handleChange}
                value={this.state.smurf.age}
                />
            <input 
                type="text"
                name="height" 
                placeholder="Height" 
                onChange={this.handleChange}
                value={this.state.smurf.height}
                />
            <button className="submit" onClick={() => this.props.addSmurf(this.state.smurf)}>Add</button>
        
    </div>
        )
    }
}

export default connect(null, { addSmurf })(Form)
