import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

class SmurfRow extends React.Component {

    deleteHandler = e => {
        e.preventDefault();
        this.props.deleteSmurf(this.props.smurf.id);
    }

    render() {
        return (
            <tr key={this.props.smurf.id} className="smurf-row">
                <td>{this.props.smurf.id}</td>
                <td><Link to={`/update/${this.props.smurf.id}`}>{this.props.smurf.name}</Link></td> 
                <td>{this.props.smurf.age}</td>
                <td>{this.props.smurf.height}</td>
                <td><button className='delete-button' onClick={this.deleteHandler}>x</button></td>
            </tr>
        )
    }
}

export default connect(() => ({}), { deleteSmurf })(SmurfRow);