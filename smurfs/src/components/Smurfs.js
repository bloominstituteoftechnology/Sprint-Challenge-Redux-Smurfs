import React, { Component } from 'react';
import Smurf from './Smurf.js'

class Smurfs extends Component {
    render()    {
        return(
            <div>
            {this.props.smurfs.map((smurf, index) =>  {
                return <Smurf key={index} smurf={smurf} />
            })}
            </div>
        )
    }
}

export default Smurfs;
