import React from 'react';

function SmurfList (props) {
    console.log('SmurfList.js props', props);
    return (
        <div className="SmurfList">
            {props.smurfs.map((smurf, index) => {
                return (
                    <div className="Smurf" key={index}>
                        <li>Name: {smurf.name}</li>
                        <li>Age: {smurf.age}</li>
                        <li>Height: {smurf.height}</li>
                    </div>
                )
            })}
        </div>
    )
}

export default SmurfList;