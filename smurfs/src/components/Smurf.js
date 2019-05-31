import React from 'react';
import '../App.css';

const Smurf = props => {
   console.log(props)
    return(
        <div className="smurf">
            <h3>{props.name}</h3>
            <strong>{props.age} Smurf Years Old</strong>
            <p>{props.height} CM Tall</p>
          
        </div>
    )

}

export default Smurf
