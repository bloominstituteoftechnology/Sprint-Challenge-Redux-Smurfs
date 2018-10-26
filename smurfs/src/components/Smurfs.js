import React, { Component } from 'react';

class Smurfs extends Component {

    render() {
        return (
            <div>
                <div>
                    {this.props.smurfs.map(smurf => {
                        return (
                            <ul key={smurf.id}>
                                <li>{smurf.name}</li>
                                <li>{smurf.age}</li>
                                <li>{smurf.height}</li>
                            </ul>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Smurfs;