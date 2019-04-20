import React from 'react';
import { connect } from 'react-redux';


const Smurf = (props) =>{
    const { smurfs } = props
    return(
        <div>
            <button>Delete</button>
            <h2>{smurfs.name}</h2>
            <h4>{smurfs.age}</h4>
            <h4>{smurfs.height}</h4>
        </div>
    )
}

const mapsStateToProps = () => ({})
export default connect(mapsStateToProps)(Smurf);