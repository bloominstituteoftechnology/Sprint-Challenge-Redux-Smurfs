import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import AddSmurf from './AddSmurf';
import Smurf from './Smurf';
import { getSmurfs } from '../actions/index';


export class App extends Component {

  componentDidMount() {
    this.props.getSmurfs()
  }
  render() {
    return (
      <div className="App">
        <div>
          {this.props.loading ? <h1>Loading Smurfs...</h1> : null}
          {this.props.error !== "" ? <h1>{this.props.error}</h1> : null}
          {!this.props.loading && this.props.error === '' ? <h1>SMURFS! 2.0 W/ Redux</h1> : null}
          {this.props.smurfs.map(smurf => (
            <Smurf key={smurf.id} smurf={smurf} />
          ))}
          {!this.props.loading && this.props.error === '' ?<AddSmurf /> : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error,
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, {getSmurfs})(App)
