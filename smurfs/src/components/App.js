import React from 'react';
import {connect} from 'react-redux';

import SmurfCard from './SmurfCard';
import {fetchSmurfs} from '../actions/index';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    if(this.props.fetching === true) {
      return <h1>Loading data...</h1>
    }
    return (
      <div className="App">
        {this.props.smurfs.map(smurf => {
          return <SmurfCard key={smurf.name + smurf.height} smurf={smurf} />
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
  })
}

export default connect(mapStateToProps, {fetchSmurfs})(App);
