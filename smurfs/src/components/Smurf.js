import React from 'react';
import {connect} from 'react-redux';
import {deleteSmurf} from '../actions/index';

const Smurf = (props) => {
    console.log(props);
    return (
        <div className = 'smurf'>
            <span><strong>Name:</strong> {props.name}</span><br />
            <span><strong>Age:</strong> {props.age}</span><br />
            <span><strong>Height:</strong> {props.height}</span><br />
            <br/>
            <button onClick={() => props.deleteSmurf(props.id)}>DELETE ME :(</button>
        </div>
    )
}

const mapStateToProps = () => {
    return {}
}

export default connect(
    mapStateToProps, {deleteSmurf}
)(Smurf);