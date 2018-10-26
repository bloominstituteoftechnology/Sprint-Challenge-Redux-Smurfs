import React from 'react';
import {connect} from 'react-redux';
import {getSmurfs} from '../actions';
 const Smurfs = props => {
    return(
        <div>
            {props.smurfs.map (smurf =>
            <div className ="smurfs">
            <h2> Name: {smurf.name}</h2>
            <h3> Age: {smurf.age} </h3>
            <h3> Height: {smurf.height}</h3>
            </div>
            )}
            </div>
        )
    }
     const mapStateToProps = state => {
        return{
            error: state.error,
            smurfs: state.smurfs
        };
    };
     export default connect(mapStateToProps,{getSmurfs})(Smurfs);