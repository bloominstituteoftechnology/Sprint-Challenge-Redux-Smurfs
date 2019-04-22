import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs, deleteSmurf } from '../actions';

import SmurfForm from './smurfForm/';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {
      return this.props.getSmurfs();
  }
  deleteSmurf = (e) => {
    e.preventDefault();
    const smurfID = e.target.id;
    return this.props.deleteSmurf(smurfID)
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <h1>Smurf Village</h1>
        {this.props.fetchingSmurfs ? <p className='CRUD-info'>Loading Village...</p> : null }
        {this.props.deletingSmurf ? <p className='CRUD-info'>Removing Smurf...</p> : null }
        {this.props.addingSmurf ? <p className='CRUD-info'>Adding Smurf...</p> : null}
        <div className="smurf-list">
        {this.props.smurfs.map(smurf => {
          return (<section className="smurf-card" key={smurf.id}>
            <span className='close' id={smurf.id}
                  onClick={this.deleteSmurf}>X</span>
            <p className="smurf-name">{smurf.name}</p>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
          </section>)
        })}
        </div>
        <SmurfForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    fetched: state.fetched,
    error: state.error,
    deletingSmurf: state.deletingSmurf,
    addingSmurf: state.addingSmurf
  }
}

export default connect(mapStateToProps, { getSmurfs, deleteSmurf })(App);
