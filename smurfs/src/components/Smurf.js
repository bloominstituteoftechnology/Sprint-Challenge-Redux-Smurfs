import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../images/logo.svg';
import { editSmurfs } from '../actions/index.js';
import { addSmurfs } from '../actions/index.js';

class Smurf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
            newSmurf: ''
        };
    }

    handleSmurfName = event => {
        this.setState({ newSmurf: event.target.value });
    };

    saveHandler = () => {
        const newSmurf = {
            name: this.state.newSmurf,
            id: this.props.smurf.id
        };

        if (newSmurf.name !== '') {
            this.props.editSmurfs(newSmurf);
        }

        this.setState({ showForm: false, newSmurf: '' });
    };

    render() {
        return (
            <React.Fragment>
                {this.props.editing ? (
                    <img src={logo} className="App-logo" alt="logo" />
                ) : (
                    <div>
                        {this.props.smurf.name}
                        {this.state.showForm ? (
                            <input
                                onChange={this.handleSmurfName}
                                value={this.state.newSmurf}
                                placeholder={`Edit ${this.props.smurf.name}`}
                            />    
                        ) : null}
                        {!this.state.showForm ? (
                            <button onClick={() => this.setState({ showForm: true })}>
                                Edit
                            </button>
                        ) : (
                            <button onClick={this.saveHandler}>Save Change</button>
                        )}
                    </div>
                )}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        error: state.error,
        editing: state.editing
    };
};

export default connect(mapStateToProps, { addSmurfs, editSmurfs })(Smurf);