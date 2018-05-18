import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSmurf } from '../actions';

class AddSmurf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: null,
            height: null
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    addSmurf = (e) => {
        e.preventDefault();
        const smurf = {
            name: this.state.name, 
            age: this.state.age, 
            height: this.state.height
        }
        this.props.createSmurf(smurf);
    }

    render() { 
        return (
            <form className="new-smurf" onSubmit={this.addSmurf}>
                <input 
                    name="name" 
                    placeholder="John"
                    onChange={this.handleChange}/>
                <input 
                    name="age" 
                    placeholder="100"
                    onChange={this.handleChange}/>
                <input  
                    name="height" 
                    placeholder="5cm"
                    onChange={this.handleChange}/>
                <button className="btn">Add</button>
            </form>
        )
    }
}
 
export default connect(null, { createSmurf })(AddSmurf);