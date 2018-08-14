import React, { Component } from 'react';
import { connect } from 'react-redux'

class SmurfsDisplay extends Component {
    render() {
        return (
            <div>
                {this.props.fetchingSmurfs ? <div>Loading...</div> : this.props.smurfs.map(smurf => {
                    return <div key={smurf.id}>{`${smurf.id}: ${smurf.name} ${smurf.age} ${smurf.height}`}</div>
                })}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs
    }
}

export default connect(mapStateToProps)(SmurfsDisplay);