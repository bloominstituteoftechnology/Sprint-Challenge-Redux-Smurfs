import React from "react";
import Smurf from "./Smurf";

const SmurfList = props => {
    return(
        <div className='smurf_lists'>
            {props.smurf}
        </div>
    )
}

export default SmurfList;