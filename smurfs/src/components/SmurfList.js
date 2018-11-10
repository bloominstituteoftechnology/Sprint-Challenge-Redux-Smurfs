import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index';
import Smurf from './Smurf';

class SmurfList extends Component {
    componentDidMount(){
        this.props.getSmurfs();
      }

    render(){
        return(
        <div>
            {this.props.smurfs.map( smurf =>
                < Smurf smurf={smurf} key={smurf.name} />
            )}
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    smurfs: state.smurfs,
    error: state.error,
    loading: state.loading,
    }
  };
  
export default connect(mapStateToProps, { getSmurfs } )(SmurfList);