import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index';
import smurf from './Smurf';

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
            {this.props.smurfs.map( (smurf, index) => <smurf smurf={smurf} key={index} />)}
            </div>
        );
      }
    }

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs
    }
}

export default connect(mapStateToProps, { getSmurfs })(SmurfVillage)