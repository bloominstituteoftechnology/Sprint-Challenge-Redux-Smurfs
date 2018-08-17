import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions';
import SmurfsList from './SmurfsList';
import AddSmurf from './AddSmurf';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  addSmurf = smurf => {
    this.props.addSmurf(smurf)
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.fetchingSmurfs ?
          (<p> the smurfs b comin</p>)
          : (<SmurfsList smurfs={this.props.smurfs} />)
        }
        <p> Add Smurf? </p>
        <AddSmurf handleAddSmurf={this.addSmurf} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs
})

export default connect(mapStateToProps, {getSmurfs, addSmurf})(App);
