import React from 'react';
import Smurf from './Smurf'

class SmurfsList extends React.Component{
    render(){
        return(
            <ul>
                {this.props.smurfs.map((smurf,i) => {
                    return(
                        <Smurf  key={i}
                                smurf={smurf} />
                    )
                })}
            </ul>
        )
    }
}

export default SmurfsList;