import React, { Component } from 'react';
import './App.css';
import SmurfForm from './SmurfForm';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';
import Smurf from './Smurf';


class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }


  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />
        {this.props.error ? <h3>Error retrieving Smurf Data</h3> : null}
        {this.props.fetching ? <h3>Retrieving Smurfs...</h3> : null}
        {this.props.fetched ? (
          <div>
            {this.props.smurfs.map(smurf => {
              <Smurf smurf={smurf}/>
            })}
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetchingSmurfs,
    fetched: state.fetchedSmurfs,
    error: state.error,
  }
}

export default connect(mapStateToProps, { fetchSmurfs })(App);
