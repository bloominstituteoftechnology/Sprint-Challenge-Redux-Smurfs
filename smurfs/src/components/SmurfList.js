import React from 'react' ;
import Smurf from './Smurf' ;
import NewSmurfForm from './NewSmurfForm.js' ;

const SmurfList = (props) => {
    return(
        <div>
        <h2>Smurf Village</h2>
{/*
    {console.log("Smurf Props", props)}
*/}

        <NewSmurfForm />

        {props.smurfs.map((smurf, index) => {
            return(
                <Smurf
                    name={smurf.name}
                    id={smurf.id}
                    age={smurf.age}
                    height={smurf.height}
                    key={index}
                />
            )
        })}
        </div>
    )
}
export default SmurfList ;