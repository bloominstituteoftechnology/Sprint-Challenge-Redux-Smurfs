import React, { Component } from 'react';
import {connect} from 'react-redux'

import {getSmurfs, postSmurf, deleteSmurf, updateSmurf} from "../actions"
import SmurfForm from './SmurfForm'
import Smurf from './Smurf'
import './App.css';

class App extends Component {
    state = {
        activeSmurf: null,
        isUpdating: false
    }
    
    componentDidMount() {
        this.props.getSmurfs()
    }
    
    updateForm = (smurf) => {
        this.setState({
            activeSmurf: smurf,
            isUpdating: true
        })
    }
    
    isChanging = () => {
        if(this.props.isGetting || this.props.isAdding || this.props.isUpdating || this.props.isDeleting)
            return true
        return false
    }

  render() {
    return (
      <div className="app_container">
          {this.isChanging() ? <h2>Dem Smurfs Be Changing!</h2> : <h2>Smurf Village</h2>}
          <SmurfForm 
            activeSmurf={this.state.activeSmurf} 
            isUpdating={this.state.isUpdating} 
            add={this.props.postSmurf} 
            update={this.props.updateSmurf}/>
          {this.props.errorMessage && <h3>"Ya gone did smurfed!"</h3>}
          {this.props.smurfs.map(smurf => 
            <Smurf 
                key = {smurf.id} 
                smurf={smurf} 
                update={this.updateForm} 
                delete={this.props.deleteSmurf} 
            />
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
    smurfs: state.smurfs,
    isGetting: state.isGetting,
    isAdding: state.isAdding,
    isUpdating: state.isUpdating,
    isDeleting: state.isDeleting,
    errorMessage: state.errorMessage,
})

const mapDispatchToProps = {
    getSmurfs,
    postSmurf,
    deleteSmurf,
    updateSmurf
}

App.defaultProps = {
    smurfs: []
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
