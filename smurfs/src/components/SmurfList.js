import React from 'react';

export default function SmurfList(props){
    return(
        <ul>
            {props.smurfs.map((smurf,index) =>{
                return(
                    <li key={index}>
                        {smurf.name} age:{smurf.age} height:{smurf.height}
                        <button type='submit' onClick={props.deleteSmurf}>Delete</button>
                    </li>
                )
            })}
        </ul>
    )
}