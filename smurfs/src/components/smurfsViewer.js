import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs, deleteSmurf } from '../actions/index';

import Smurfs from './smurfs';

class SmurfsViewer extends Component {

    componentDidMount() {
        this.props.getSmurfs()
    }

    render() {
        console.log(this.props.smurfs)
        if(this.props.loading) {
            return (<h1>LOADING SMURFS....</h1>)
        }
        return(
            <div>
                <Smurfs smurfs={this.props.smurfs} deleteSmurf={this.props.deleteSmurf}/>
            </div>
        )
    }
}

const mstp = state => {
    console.log("FROM VIEWER:", state)
    return {
        smurfs: state.smurfs,
        loading: state.loading
    }
}

export default connect(mstp, { getSmurfs, deleteSmurf })(SmurfsViewer);

