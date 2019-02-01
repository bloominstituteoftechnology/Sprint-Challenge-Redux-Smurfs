import React, { Component } from 'react';
import './App.css';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';
import { getSmurfs } from '../actions';
import { connect } from 'react-redux';
import { Route, NavLink } from 'react-router-dom';
import SelectedSmurf from './SelectedSmurf';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">
        <div className='topBar'>
          <header className="App-header">
            <h1>SMURFS! 2.0 W/ Redux</h1>
          </header>
          <div className="navbar">
            <NavLink to='/smurfs'>
              <h3>Visit Smurf Village</h3>
            </NavLink>
            <NavLink to='/smurf-form'>
              <h3>Add Smurf!</h3>
            </NavLink>
          </div>
        </div>
        {this.props.error ? <h3>Error fetching Smurfs</h3>: null}
       
        <Route 
          exact path='/smurfs'
          render={props => (
           <Smurfs 
            {...props}
            smurfs={this.props.smurfs} />
          )}/>
        <Route
          exact path='/smurf-form'
          render={props => (
           <SmurfForm
            {...props} />
          )}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
   const {smurfsReducer} = state;
   return{
     smurfs: smurfsReducer.smurfs,
     error: smurfsReducer.error,
     gettingSmurfs: smurfsReducer.gettingSmurfs
   }
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
