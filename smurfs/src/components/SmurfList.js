import React, { Component } from 'react';



class SmurfList extends Component {
    render () {
        return (
            <div>
                {this.props.smurfs.map(smurf => 
                    <p key={smurf.name + smurf.id}>
                        {smurf.name} {smurf.age} {smurf.height}
    
                    </p>
                )}
            </div>
        )
    }

    
}
export default SmurfList;