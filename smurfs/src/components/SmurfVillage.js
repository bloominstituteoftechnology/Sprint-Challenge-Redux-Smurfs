import React, {Component} from 'react'
import Smurf from './Smurf'
import {connect} from 'react-redux'
import {getSmurfs} from '../actions'

class SmurfVillage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.getSmurfs();
    }

    render() {
      return (
        <div className="App">
          {this.props.smurfs.map( smurf => <Smurf name={smurf.name} age={smurf.age} height={smurf.height} /> )}
        </div>
      );
    }
  }

  const mapStateToProps = state => {
      return {
        smurfs: state.smurfs,
        gatheringSmurfs: state.gatheringSmurfs,
        error: state.error,

      }
  }
  
  export default connect (mapStateToProps, {getSmurfs})(SmurfVillage);