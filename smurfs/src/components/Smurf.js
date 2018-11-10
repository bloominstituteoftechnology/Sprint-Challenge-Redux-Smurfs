import React from 'react';
import {connect} from 'react-redux';
import {deleteSmurf} from "../actions";

class Smurf extends React.Component {

    gargamelGotEm = event => {
        event.preventDefault();
        this.props.deleteSmurf(this.props.smurf.id);
    }

    render (){
        return (
            <div className='smurf'>
            <h3>{this.props.smurf.name}</h3>
            <h3>{this.props.smurf.age} years old</h3>
            <h3>{this.props.smurf.height} tall</h3>
            <button className="delete-button" onClick={this.gargamelGotEm}>Delete Smurf</button>
            
            </div>
        )
    }
}


export default connect(
    null,
    {deleteSmurf}
)(Smurf);