import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addSmurf, getSmurfs} from '../actions';
import SmurfForm from '../components/SmurfForm';
import SmurfList from '../components/SmurfList'

class SmurfView extends Component {
componentDidMount(){
    this.props.getSmurfs()
}

  render() {
    return (
      <div >
          <SmurfForm addSmurf={this.props.addSmurf}/>
          <SmurfList smurfs={this.props.smurfs}/>
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

export default connect(mapStateToProps, {addSmurf, getSmurfs})(SmurfView);
