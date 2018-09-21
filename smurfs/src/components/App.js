import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import SmurfsForm from './SmurfsForm';
import SmurfsList from './SmurfsList';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <SmurfsForm />
        {this.props.fetchingSmurfs ?
        <div>LOADING SMURFS...</div> :
        <SmurfsList />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs
})

export default connect(mapStateToProps, { getSmurfs })(App);
