import React from 'react';
import Smurf from './Smurf';
import './smurflist.css'

const SmurfList = props => {
    const deleteSmurf = (e, id) => {
        e.preventDefault();
        props.deleteSmurf(id);
    }
    const updateSmurf = (e, smurf) => {
        e.preventDefault();
        console.log(smurf)
        props.editSmurf(smurf)
    }
    return(
        <div>
             {props.smurfies.map(smurf=>{
            return(<div>
                <Smurf smurf={smurf}></Smurf>
                <div className="small-width1">
                <button onClick={(e) => deleteSmurf(e, smurf.id)}>Delete</button>
                <button onClick={(e) => updateSmurf(e, smurf)}>Update</button>
                </div>
                </div>)})}

        </div>
    )
}

export default SmurfList;