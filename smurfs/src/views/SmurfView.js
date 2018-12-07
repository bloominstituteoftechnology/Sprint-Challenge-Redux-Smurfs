import React, { Component } from 'react';
import { connect } from 'react-redux';
import Smurf from '../components/Smurf';
import SmurfControl from '../components/SmurfControl';
import {
    getSmurf,
    getSmurfs, 
    deleteSmurf
} from '../actions';
class SmurfView extends Component {
    componentDidMount = () => {
        this.props.getSmurf(this.props.match.params.smurfId)
    }

    handleDeleteClick = e => {
        e.preventDefault();

        this.props.deleteSmurf(this.props.smurf.id);

        this.props.history.push('/');
    }

    render(){
        return(
            <div>
                <Smurf 
                    smurf={this.props.smurf} 
                    handleDeleteClick={this.handleDeleteClick}
                />
                <SmurfControl 
                    handleDeleteClick={this.handleDeleteClick}
                />
            </div>
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
        getSmurfs: () => dispatch(getSmurfs()),
        deleteSmurf: id => dispatch(deleteSmurf(id))
    }
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SmurfView);