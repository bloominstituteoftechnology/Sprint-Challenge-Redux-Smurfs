import React, { Component } from 'react';
import { connect } from "react-redux"
import { createSmurf } from "../actions"
class SmurfForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            age: '',
            height: '',
         }
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    addSmurf = _ => {
        const { name, age, height } = this.state;
        this.props.createSmurf({name, age, height})
        this.setState({ name: '', age: '', height: ''})
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
            <button onClick={() => this.addSmurf()}>Add</button>
            </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        err: state.error,
        addingSmurf: state.addingSmurf
    }
}
 
export default connect(mapStateToProps, { createSmurf })(SmurfForm)