import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        <img src="https://vignette.wikia.nocookie.net/smurfs/images/a/a2/Male_Smurf_Comic_Book.jpg/revision/latest?cb=20110914021916"/>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.smurfs.map(smurf => <Smurf key={Math.random()} smurf={smurf}/>)}
        <SmurfForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchSmurfs: state.fetchingSmurfs,
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(App);
