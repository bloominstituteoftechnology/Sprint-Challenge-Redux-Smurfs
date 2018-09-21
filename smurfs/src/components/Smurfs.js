import React, { Component } from 'react';


class Smurfs extends Component {
    render() {
       return ( 
            <div className="Smurfbox">
                {this.props.smurfs.map(smurf => {
                    return (
                        <div className="smurf" key={smurf.name}>
                            <p className="names">{smurf.name}</p>
                            Age: {smurf.age}  years old<br></br>
                            Height: {smurf.height}cm tall
                        </div>
                    );
                })}
            
        </div>
       )}
}

export default Smurfs;