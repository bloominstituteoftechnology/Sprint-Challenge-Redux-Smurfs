import React from 'react';

class SmurfCard extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='individual-smurf'>
                <p className='smurf-name'>{this.props.smurfData.name}</p>
                <p className='smurf-age'>{this.props.smurfData.age}</p>
                <p className='smurf-height'>{this.props.smurfData.height}</p>
            </div>
        );
    }
}

export default SmurfCard;