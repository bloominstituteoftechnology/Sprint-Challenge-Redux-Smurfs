import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadSmurfs } from '../actions/index';
import Smurf from './Smurf';

class SmurfList extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.loadSmurfs()
    }

    render() {

        if (this.props.fetchingSmurfs) {
            return <p>Loaing Smurfs!</p>
        }

        return (
            <div>
                {this.props.smurfs.map(smurf => {
                    return (
                        <Smurf smurf={smurf} />
                    )
                })}
            </div>
        )
    }
}

const mstp = state => {
    return {
        fetchingSmurfs: state.fetchingSmurfs,
        smurfs: state.smurfs
    }
}

export default connect(mstp, { loadSmurfs })(SmurfList);