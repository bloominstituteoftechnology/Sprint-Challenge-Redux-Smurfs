import React from "react";
import {connect} from 'react-redux'
import {deleteSmurf} from '../actions/index'

const Smurf = ({ smurf, deleteSmurf }) => {

    const clickHandler = () => {
        deleteSmurf (smurf.id)
    }
return (
    <div key={smurf.id} className="smurf-card">
    <p className="close-button" onClick={clickHandler}>
        x
    </p>
    <h2>{smurf.name}</h2>
    </div>
);
};

const mapStateToProps = () =>({})

export default connect(mapStateToProps, {deleteSmurf})(Smurf);
