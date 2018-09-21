import React, { Component } from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';
import Smurf from './Smurf';
import {fetchSmurfs,
        saveSmurf,
        updateSmurf,
        deleteSmurf
      } from '../actions';
import {NavLink, Route} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount=()=> {
    this.props.fetchSmurfs();
  }

  handleCreateOrUpdate = (smurf, isUpdate) => {
    // console.log(smurf);
    if (!isUpdate){
      this.props.saveSmurf(smurf);
    } else{
      // this.props.updateSmurf(smurf);
    }
  }

  render() {
    return (
      <div className="App">
        <NavLink  exact
                  to="/"
                  className="link list-link"
                  activeClassName="activeNavButton">Smurf List</NavLink>
        <NavLink  to="/smurf-form"
                  className="link form-link"
                  activeClassName="activeNavButton">Add Smurf</NavLink>
        <Route  exact
                path="/"
                render={props =>  
                        <Smurfs {...props}
                                smurfs={this.props.smurfs}
                                handleCreateOrUpdate={this.handleCreateOrUpdate} 
                                // handleDelete={this.handleDelete}
                        /> } />
        <Route  path="/smurf-form"
                render={props => <SmurfForm {...props}
                                            smurfs={this.props.smurfs}
                                            handleCreateOrUpdate={this.handleCreateOrUpdate}
                                            componentDidMount={this.componentDidMount} /> } />
        { this.props.error ? console.log("wtf")
                          : null}
      </div>
    )}
}

const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfs, 
    fetchingSmurfs: state.fetchingSmurfs,
    SmurfsFetched: state.SmurfsFetched,
    smurfSaved: state.smurfSaved,
    savingSmurf: state.savingSmurf,
    // updatingSmurf: state.updatingSmurf,
    // smurfUpdated: state.smurfUpdated,
    // deletingSmurf: state.deletingSmurf,
    // smurfDeleted: state.smurfDeleted,
    error: state.error
  };
};

export default connect(mapStateToProps, 
  { fetchSmurfs,
    saveSmurf
    // updateFriend,
    // deleteFriend
  })(App);
