import React, { Component } from 'react';

import { conect } from 'react-redux';


class Smurfs extends Component {

    componentDidMount() {
        
    }

    render() { 
        return ( 
            <div className='smurf-card'>
                <h2>{}</h2>
                <h4>{}</h4>
                <h4>{}</h4>
            </div>
         )
    }
}
 
export default Smurfs;