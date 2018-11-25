import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';
import './App.css';

const Smurf = props => {
    const { smurf, deleteSmurf } = props 

    const clickHandler = () => {
        deleteSmurf(smurf.id)
    }

    return (
        <div className ='smurfz' key={smurf.id}>
            <span className='close' onClick={clickHandler}>Delete Smurf</span>
            <h3>Name: {smurf.name}</h3>
            <h4>Age: {smurf.age}</h4>
            <h4>Height: {smurf.height}cm</h4>
            <h4>Id: {smurf.id}</h4>
            <Link to={`/update/${smurf.id}`}>Update</Link>
        </div>
    )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps,{deleteSmurf})(Smurf);