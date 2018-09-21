import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions';

import SmurfAddForm from '../components/Smurfs/SmurfAddForm';

class SmurfAddFormView extends Component {
    state = {
        smurf: {
            name: '',
            age: '',
            height: '',
        },
        modal14: false,
    };

    // Toggles the modal for confirmation
    toggle = e => {
        e.preventDefault();
        this.setState({
            modal14: !this.state.modal14
        });
    }

    // Handles the input from the inputs in SmurfAddForm.jsx
    handleChange = e => {
        e.preventDefault();

        this.setState({
            smurf: {
                ...this.state.smurf,
                [e.target.name]: e.target.value,
            }
        });
    };

    // Handles adding the new smurf to the server
    handleAddSmurf = e => {
        e.preventDefault();
        
        this.props.addSmurf(this.state.smurf);
    };

    render() {
        return (
            <SmurfAddForm
                {...this.props}
                smurf={this.state.smurf}
                handleAddSmurf={this.handleAddSmurf}
                handleChange={this.handleChange}
                toggle={this.toggle}
                modal14={this.state.modal14}
            />
        );
    };
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, { addSmurf })(SmurfAddFormView);