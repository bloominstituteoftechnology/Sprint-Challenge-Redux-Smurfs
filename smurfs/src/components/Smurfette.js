import React, { Component } from 'react';
import { connect } from 'react-redux';


class Smurf extends Component {
    render() {
        return (
            <div className="Smurf">
                <h3>Name: {props.name}</h3>
                <strong>{props.name} is {props.height} tall</strong>
                <p>{props.name} is {props.age} years old</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(Smurf);