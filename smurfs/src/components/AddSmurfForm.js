import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class AddSmurfForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            height: '',
        }
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if(!this.state.name || !this.state.age || !this.state.height) {
            return;
        }
        const URL = 'http://localhost:3333/smurfs/';
        const smurf = { 
            name: this.state.name,
            age: Number(this.state.age),
            height: this.state.height,
        }
        this.props.addSmurf(URL, smurf);
        this.setState({ name: '', age: '', height: ''})
    }

    render() {
        return (
            <form>
                <input placeholder="Smurf's Name" onChange={this.handleInputChange} name="name" value={this.state.name} />
                <input type="number" placeholder="Smurf's Age" onChange={this.handleInputChange} name="age" value={this.state.age} />
                <input placeholder="Smurf's Height" onChange={this.handleInputChange} name="height" value={this.state.height} />
                <button type="submit" onClick={this.handleFormSubmit}>Add Smurf</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        addingSmurf: state.addingSmurf,
    }
}

export default connect(mapStateToProps, { addSmurf })(AddSmurfForm);