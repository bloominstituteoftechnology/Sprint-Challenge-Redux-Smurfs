import React from 'react';
import { connect } from 'react-redux';

import { findSmurfs } from '../../actions';

import Smurf from '../presentational/Smurf';

class Village extends React.Component {
    state = {};

    componentDidMount() {
        this.props.findSmurfs()
    }

    inputHandler = e => {
        this.setState({[e.currentTarget.name]:e.currentTarget.value});
    }

    render() {
        return (
            <div className="village">
           { this.props.smurfs.map(
            smurf => <Smurf key={smurf.id} smurf={smurf}/>)}
            </div> 
        )
    }
}

const buildVillage = village => ({
    smurfs: village.smurfs
});

export default connect(buildVillage, { findSmurfs })(Village);