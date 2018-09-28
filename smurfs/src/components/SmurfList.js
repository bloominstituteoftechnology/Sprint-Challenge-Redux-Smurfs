import React from 'react';

function SmurfList(props) {
    return (
        <div>
            {this.props.smurfs.map(smurf => (
            <div className="smurfCard" key={smurf.id}>
                <h2>{smurf.name}</h2>
                <p>{smurf.age}</p>
                <p>{smurf.height}</p>
            </div>
            ))}
        </div>
    )
}
export default SmurfList;