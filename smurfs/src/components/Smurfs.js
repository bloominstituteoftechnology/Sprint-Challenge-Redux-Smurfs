import React from 'react';

const Smurfs = (props) => {
    return (
        <ul className='smurfs-list'>
            {props.smurfs.map(smurf => {
                return (
                    <div key={smurf.name} className='smurf-card'>
                        <p>Name: {smurf.name}</p>
                        <p>Age: {smurf.age}</p>
                        <p>Height: {smurf.height}</p>
                    </div>    
                )
            })}
        </ul>
     );
}
 
export default Smurfs;