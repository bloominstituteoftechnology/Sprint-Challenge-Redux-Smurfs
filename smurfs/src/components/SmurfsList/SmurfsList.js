import React from 'react';

function SmurfsList(props) {
    if(!props.smurfsList || !props.smurfsList.length) {
        return <h1>The village is empty</h1>
    }

    return (
        <div>
            {props.smurfsList.map(smurf => (
                <div key={smurf.name}>
                    <h2>{smurf.name}</h2>
                    <h3>{smurf.age}</h3>
                    <h3>{smurf.height}</h3>
                </div>
            ))}
        </div>
    );
}

export default SmurfsList;