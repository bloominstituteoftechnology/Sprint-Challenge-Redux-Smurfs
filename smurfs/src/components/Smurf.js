import React from 'react';
// import {connect} from 'react-redux';
// import {deleteSmurf} from "../actions";

class Smurf extends React.Component {
    
    render (){
        return (
            <div className='smurf'>
            <h3>{this.props.smurf.name}</h3>
            <h3>{this.props.smurf.age}</h3>
            <h3>{this.props.smurf.height}</h3>
            </div>
        )
    }
}

export default Smurf;