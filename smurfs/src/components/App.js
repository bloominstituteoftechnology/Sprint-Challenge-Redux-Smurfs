/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchSmurfs, addSmurf, deleteSmurf } from '../actions';
import SmurfForm from './SmurfForm';
import Smurfs from './Smurfs';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
const App = ({
  state, dispatchAddSmurf, dispatchDeleteSmurf, dispatchFetchSmurfs,
}) => (
  <div className="App">
    <h1>SMURFS! 2.0 W/ Redux</h1>
    <div>Welcome to your Redux version of Smurfs!</div>
    <div>Start inside of your `src/index.js` file!</div>
    <div>Have fun!</div>

    <SmurfForm addSmurf={dispatchAddSmurf} />
    <Smurfs
      smurfs={state}
      fetchSmurfs={dispatchFetchSmurfs}
      deleteSmurf={dispatchDeleteSmurf}
    />
  </div>
);

App.propTypes = {
  state: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  dispatchAddSmurf: PropTypes.func.isRequired,
  dispatchFetchSmurfs: PropTypes.func.isRequired,
  dispatchDeleteSmurf: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps, {
  dispatchFetchSmurfs: fetchSmurfs, dispatchAddSmurf: addSmurf, dispatchDeleteSmurf: deleteSmurf,
})(App);
