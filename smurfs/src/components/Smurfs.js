import React, { Component } from 'react';

class Smurfs extends Component {

    render() {
        return (
            <div>
                <div>
                    {this.props.smurfs.map(smurf => {
                        return (
                            <ul key={smurf.id}>
                                <li>Name: {smurf.name}</li>
                                <li>Age: {smurf.age} smurf years</li>
                                <li>Height: {smurf.height}</li>
                            </ul>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Smurfs;