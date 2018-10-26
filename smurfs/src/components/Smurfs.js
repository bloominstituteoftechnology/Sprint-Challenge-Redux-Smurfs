import React from 'react';
import './App.css';


const Smurfs = (props) => {
    console.log();
    return (
        <div>
            {props.smurfs.map((smurf, index) => 
                <div className = "smurf-data" key={smurf.id}>
                     
                     <h3>Name :   {smurf.name} </h3>
                     <p>Age :  {smurf.age} </p>
                     <p> Height : {smurf.height} </p>

                </div>
            )}
        </div>
    )
}

export default  Smurfs;