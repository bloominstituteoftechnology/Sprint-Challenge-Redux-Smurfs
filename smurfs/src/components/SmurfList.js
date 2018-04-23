import React, { Component } from 'react';
import Smurf from './Smurf';
import {connect} from 'react-redux';
import { getSmurf } from '../actions'

class SmurfList extends Component {
    render () {
        return (
            <div>
            {/* {this.props.getSmurf ? (
            ) : null} */}
            {this.props.smurf.map(smurf =>{
                return <Smurf smurf={smurf} />
            })}
            </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        smurf: state.smurf,
        getSmurf: state.getSmurf
    }
}

export default connect(mapStateToProps, { getSmurf })(SmurfList);