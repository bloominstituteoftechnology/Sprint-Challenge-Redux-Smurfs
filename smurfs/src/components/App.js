import React from 'react';
import {connect} from 'react-redux';

import SmurfCard from './SmurfCard';
import Form from './Form';
import {fetchSmurfs} from '../actions/index';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    if(this.props.fetchingSmurfs === true) {
      return <h1>Loading data...</h1>
    }
    else {
    return (
      <div className="App">
        <Form type='Add Smurf'/>
        {this.props.smurfs.map(smurf => {
          return <SmurfCard key={smurf.name + smurf.height} smurf={smurf} />
        })}
      </div>
    );
      }
  }
}

const mapStateToProps = state => {
  return ({
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
  })
}

export default connect(mapStateToProps, {fetchSmurfs})(App);
