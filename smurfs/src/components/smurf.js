import React, { Component } from 'react';

import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';


class Smurf extends Component {

    handleDeleteSmurf = event => {
        event.preventDefault();
        const id = this.props.smurf.id;
        this.props.deleteSmurf(id);
    }


    render() {
        return (
            <div>
                <h2>Name: {this.props.smurf.name}</h2>
                <p>Age: {this.props.smurf.age}</p>
                <p>Height: {this.props.smurf.height}</p>
                <button onClick={this.handleDeleteSmurf}>delete</button>
            </div>
        )
    }
}

export default connect(null, { deleteSmurf })(Smurf);