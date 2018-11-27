import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index';
import smurf from './Smurf';
import smurfList from './SmurfList'

class SmurfVillage extends Component { 
    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        if(this.props.fetchingSmurfs === true) {
            return <div>Loading data...</div>
        }
        return (
            <div>
            <SmurfList smurfs={this.props.smurfs} />
            </div>
        );
      }
    }

const mapStateToProps = (state) => {
    return {smurfs: state.smurfs, loading: state.loading, error: state.error}
}