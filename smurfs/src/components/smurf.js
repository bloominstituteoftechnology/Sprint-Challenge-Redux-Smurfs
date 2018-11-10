import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions/index'

const Smurf = props =>{
    return (
        <div>
        <Link to><h1>{props.smurf.name}</h1></Link>
        <button onClick={()=>props.deleteSmurf(props.smurf.id)}>x</button>
        </div>
    )
}


export default connect(()=>{}, { deleteSmurf})(Smurf);