import React, { Component } from "react";
import { connect } from 'react-redux';
import { SmurfList } from '../components'

class SmurfListView extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="SmurfListView">
        <SmurfList smurfs={this.props.smurfs} /> 
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('mapStateToProps', state)
  return {
    smurfs: state.smurfReducer.smurfs
  }
}
 
export default connect(
  mapStateToProps,
  {

  }
)(SmurfListView);