import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions/index';
import Smurf from './Smurf';

class SmurfList extends Component { 
    componentDidMount() {
        this.props.getSmurfs()
    }

    render() {
        return(
            <div>
                {this.props.loading ? <h1>Loading</h1> : null}
                {this.props.error !== '' ? <h1>{this.props.error}</h1> : null}
                {this.props.smurfs.map( (smurf, index) => <Smurf smurf={smurf} key={index} />)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        error: state.error,
        loading: state.loading
    }
}

export default connect(mapStateToProps, { getSmurfs })(SmurfList)