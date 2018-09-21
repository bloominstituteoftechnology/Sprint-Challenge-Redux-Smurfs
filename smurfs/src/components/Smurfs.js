import React, { Component } from 'react';
import { connect } from 'react-redux';

class Smurfs extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.smurfs.map(smurf => {
                        return (
                            <li >
                                <p>Name: {smurf.name}</p>
                                <p>Age: {smurf.age} smurf years</p>
                                <p>Height: {smurf.height}</p>
                            </li>
                         );
                    })}
                </ul>
            </div>
        )
    }
}

export default Smurfs;

