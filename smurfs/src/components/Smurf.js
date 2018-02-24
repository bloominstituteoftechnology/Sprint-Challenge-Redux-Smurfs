import React from 'react';
import { connect } from 'react-redux';

const Smurf = (props) => {
    return (
        <div>
            <ul>
                <li>Name: {props.smurf.name}</li>
                <li>Age: {props.smurf.age} years old</li>
                <li>Height {props.smurf.height} cm tall</li>
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        smurfs: state.smurfs,
    };
};

export default connect(mapStateToProps)(Smurf);