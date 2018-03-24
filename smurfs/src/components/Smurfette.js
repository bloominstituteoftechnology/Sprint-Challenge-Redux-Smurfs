import React, { Component } from 'react';
import { connect } from 'react-redux';


class Smurfette extends Component {
    render(props) {
        return (
            <div className="Smurfette">
                <h3>Name: {this.props.smurfette.name}</h3>
                <strong>{this.props.smurfette.name} is {this.props.smurfette.height} tall</strong>
                <p>{this.props.smurfette.name} is {this.props.smurfette.age} years old</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(Smurfette);