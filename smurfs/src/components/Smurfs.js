import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import { connect } from 'react-redux';
import { UpdateSmurfsForm } from './UpdateSmurfsForm';

class Smurfs extends Component {


    render() {
        return (
            <div className="Smurf-Container">
                <ul className="Smurf-List">
                {this.props.smurfs.map(smurf => {
                    return (
                        <li key={smurf.id}>
                            {smurf.name}
                        </li>
                    );
                })}
                </ul>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        error: state.friendsReducer.error
    };
};

export default connect(mapStateToProps, {
    
})(Smurfs);


