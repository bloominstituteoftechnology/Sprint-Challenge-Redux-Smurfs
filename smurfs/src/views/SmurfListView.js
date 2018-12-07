import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    getSmurfs
} from '../actions'

import SmurfList from '../components/SmurfList';

class SmurfListView extends Component {
    componentDidMount(){
        this.props.getSmurfs()
    }

    render(){
        return(
            <SmurfList smurfs={this.props.smurfs}/>
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
      getSmurfs: () => dispatch(getSmurfs()),
    }
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SmurfListView);