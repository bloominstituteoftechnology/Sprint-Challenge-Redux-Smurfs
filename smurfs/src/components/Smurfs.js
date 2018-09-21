import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

const Smurfs = props => {
    return(
        <div className="smurfRoster">
            {props.smurfs.map (smurf =>
            <div className={`smurf ${smurf.name}`}>
            <p className="name"><strong>Name: </strong>{smurf.name}</p>
            <p><strong>Age: </strong>{smurf.age} </p>
            <p><strong>Height: </strong>{smurf.height}</p>
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