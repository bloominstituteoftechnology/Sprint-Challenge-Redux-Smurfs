import React, { Component } from "react";
import { connect } from 'react-redux';
import { 
  getSmurfs,
  createSmurf,
} from '../actions'
import { 
  SmurfList,
  CreateSmurfForm
} from '../components'

class SmurfListView extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  componentDidMount() {
    this.props.getSmurfs()
  }
  render() { 
    return ( 
      <div className="SmurfListView">
        <CreateSmurfForm createSmurf={this.props.createSmurf}/>
        <SmurfList 
          smurfs={this.props.smurfs} 
          deleteSmurf={this.props.deleteSmurf}
        /> 
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
    getSmurfs,
    createSmurf
  }
)(SmurfListView);