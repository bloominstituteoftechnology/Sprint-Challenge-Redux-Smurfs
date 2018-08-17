import React from 'react';

const SmurfList = (props) => {
    return (  
        <div className="smurf-container">
            {this.props.smurfs.map(smurf => {
                return (
                    <div>
                        <h3>Name: {smurf.name}</h3>
                        <p>Age: {smurf.age}</p>
                        <p>Height: {smurf.heigh}</p>
                    </div>                
                );
            })};
        </div>
    );
}
 
export default SmurfList;