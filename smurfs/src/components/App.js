import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchingSmurfs, addingSmurfs, deleteSmurf, updateSmurf } from '../actions';

import SmurfsList from '../components/Smurfs';
import AddSmurfForm from '../components/AddSmurfForm';

class App extends Component {

  componentDidMount() {
    this.props.fetchingSmurfs();
  }

  render() {
    if(this.props.deleting) {
      return <h3>Removing Smurf ...</h3>
    }
    if(this.props.adding) {
      return <h3>Adding New Smurf ...</h3>
    }
    if(this.props.fetching){
      return <h3>Loading Smurfs ...</h3>
    }
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <AddSmurfForm addNewSmurf={this.props.addingSmurfs} updating={this.props.updating} updateSmurfHandler={this.props.updateSmurf}/>
        <SmurfsList smurfs={this.props.smurfs} deletingSmurf={this.props.deleteSmurf}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    smurfs: state.smurfs,
    fetching: state.fetching,
    adding: state.adding,
    deleting: state.deleteSmurf,
    updating: state.updating,
  };
}

export default connect(
  mapStateToProps,
  { fetchingSmurfs, addingSmurfs, deleteSmurf, updateSmurf }
) (App);
