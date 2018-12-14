import React from "react";
import {connect} from 'react-redux'
import {deleteSmurf} from '../actions/index'
import {Link } from 'react-router-dom'

const Smurf = ({ smurf, deleteSmurf }) => {

    const clickHandler = () => {
        deleteSmurf (smurf.id)
    }
return (
    <div key={smurf.id} className="character-card">
    <p className="btn" onClick={clickHandler}>
        <button>CLICK ME </button>
    </p>
        <h2>{smurf.name}</h2>
        <p>Smurf's Age:{smurf.age}</p>
        <p>Add Smurf's Height:{smurf.height}</p>
        <Link to={`/update/${smurf.id}`} style={{ textDecoration: 'none', color: 'blue', cursor: 'pointer' }}>Update</Link>
    </div>
   );
};

const mapStateToProps = () =>({})

export default connect(mapStateToProps, {deleteSmurf})(Smurf);
