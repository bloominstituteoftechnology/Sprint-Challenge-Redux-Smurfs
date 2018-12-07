import React, { Component } from 'react';
import { connect } from 'react-redux';
import Smurf from '../components/Smurf';
import {
    getSmurf,
    getSmurfs
} from '../actions';
class SmurfView extends Component {
    componentDidMount = () => {
        this.props.getSmurf(this.props.match.params.smurfId)
    }

    render(){
        return(
            <Smurf smurf={this.props.smurf}/>
        )
    }
}

const mapStateToProps = state => {
    return {
      ...state
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
        getSmurf: id => dispatch(getSmurf(id)),
        getSmurfs: () => dispatch(getSmurfs())
    }
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SmurfView);