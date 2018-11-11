import React, {Component} from 'react'
import Smurf from './Smurf'
import {connect} from 'react-redux'
import {getSmurfs} from '../actions'
import './App.css'

class SmurfVillage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.getSmurfs();
    }

    render() {
        const villageOrder = this.props.smurfs.sort( (a,b) => {
            if (a.name>b.name) {return 1}
            if (a.name<b.name) {return -1}
            return 0;
        }

        ) 
      return (
        <div className="village">
          {villageOrder.map( smurf => <Smurf smurf={smurf} ID={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height} /> )}
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