import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions/index.js'
import Smurf from './Smurf.js'

class SmurfList extends Component {
    componentDidMount(){
        this.props.getSmurfs();
    }

    render() {
    return (
        <div>
            {this.props.fetchingSmurfs ? <h1>Loading Smurfs...</h1> : null}
            {this.props.error !== '' ? <h1>{this.props.error}</h1> : null}
            {this.props.smurfs.map(smurf => <Smurf smurf={smurf} key={Math.random()}/>)}
        </div>
    );
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        error: state.error,
        fetchingSmurfs: state.fetchingSmurfs
    }
}

export default connect(mapStateToProps, { getSmurfs })(SmurfList);