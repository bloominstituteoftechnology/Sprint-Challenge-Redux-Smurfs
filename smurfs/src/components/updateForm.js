import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateSmurf } from '../actions/index';

class UpdateForm extends Component {
    constructor() {
        super();
        this.state = {
            update: [],
            id: ''
        }
    }

    componentDidMount() {
        this.setState({
            update: this.props.update,
            id: this.props.updateID
        })
    }

    handleChange = e => {
        this.setState({
            update: {
                ...this.state.update,
                [e.target.name]: e.target.value
            }
        });
    }

    render() {
        return(
            <div className="form">

            <h4 >Edit the Smurf:</h4>
            <input
                type="text"
                placeholder="Smurfs Name"
                name="name"
                onChange={this.handleChange}
                value={this.state.update.name}
                />
            <input
                type="text"
                name="age"
                placeholder="Age"
                onChange={this.handleChange}
                value={this.state.update.age}
                />
            <input
                type="text"
                name="height"
                placeholder="Height (cm)"
                onChange={this.handleChange}
                value={this.state.update.height}
                />
            <button className="submit" onClick={() => this.props.updateSmurf(this.props.updateID, this.state.update)}>Update</button>

    </div>
        )
    }
}

const mstp = state => {
    return {
        update: [],
        updateID: state.updateID,
    }
}

export default connect(mstp, { updateSmurf })(UpdateForm)