import React, { Component } from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';

class SmurfsList extends Component {
    componentDidMount() {
        this.props.fetchSmurfs();
    }
    render() {
        return (
            <div>
        {this.props.fetchingSmurfs ? (<h3>Hold tight, we are fetching smurfs</h3>) : null}
                {this.props.smurfs.map(smurf => {
                    return <Smurf/>
                })}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs
    }
}
export default connect(mapStateToProps, { fetchSmurfs })(SmurfsList);