import React from 'react';

const SmurfList = (props) => {
    return (
        <div>
            {props.smurfs.map(smurf => {
                return (
                    <div className ='friend'>
                        <p>Name: {smurf.name}</p>
                        <p>Age: {smurf.age}</p>
                        <p>Height: {smurf.height}</p>
                    </div>
                );
            }
            )
            }
        </div>
    )
}

export default SmurfList;