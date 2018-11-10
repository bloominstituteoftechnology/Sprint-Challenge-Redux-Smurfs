import React from 'react';

class SmurfCard extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.smurf.name}</p>
                <p>{this.props.smurf.age} years old</p>
                <p>{this.props.smurf.height}cm tall</p>
            </div>
        )
    }
}

export default SmurfCard;