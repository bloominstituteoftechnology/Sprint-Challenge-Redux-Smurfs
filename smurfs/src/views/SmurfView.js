import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addSmurf, getSmurfs} from '../actions';
import SmurfForm from '../components/SmurfForm';
import SmurfList from '../components/SmurfList'

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class SmurfView extends Component {
  render() {
    return (
      <div >
          <SmurfForm addSmurf={this.props.addSmurf}/>
          <SmurfList getSmurfs={this.props.getSmurfs}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
}
}

export default connect(mapStateToProps, {})(App);
