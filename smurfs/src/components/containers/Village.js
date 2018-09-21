import React from 'react';
import { connect } from 'react-redux';

import { findSmurfs, deliverSmurf, changeSmurf, banishSmurf } from '../../actions';

import Smurf from '../presentational/Smurf';
import DeliverSmurfForm from '../presentational/DeliverSmurfForm';

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
                <DeliverSmurfForm deliverSmurf={this.props.deliverSmurf} inputHandler={this.inputHandler} smurf={this.state}/>
            { this.props.smurfs.map(
                smurf => <Smurf key={smurf.id} smurf={smurf}/>
                )}
            </div> 
        )
    }
}

const buildVillage = village => ({
    smurfs: village.smurfs
});

export default connect(buildVillage, { findSmurfs, deliverSmurf, changeSmurf, banishSmurf })(Village);