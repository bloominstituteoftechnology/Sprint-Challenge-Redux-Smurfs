import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions';

import Header from './Header';
import Smurfs from './Smurfs';
import AddSmurf from './AddSmurf';

import logo from '../assets/logo.svg';

import '../styles/App.css';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  addSmurfHandler = newSmurf => {
    this.props.addSmurf(newSmurf);
  };

  // editSmurf = (smurf, index) => {
  //   this.props.editSmurf(smurf, index);
  // };

  // deleteSmurf = index => {
  //   this.props.deleteSmurf(index);
  // };

  deleteAllFriendsButtonHandler = _ => {
    if (
      this.props.smurfs.length > 0 &&
      window.confirm(
        'This will annihilate your village. Just kidding. But this will evict all your smurfs. Are you sure you want to continue?'
      )
    ) {
      const count = this.props.smurfs.length;

      for (let i = 0; i <= count; i++) {
        this.deleteSmurf(0);
      }
    }
  };

  render() {
    return (
      <div className="App">
        <Header />

        <div className="TopStatusBar">
          <div className="TopStatusBarButtons">
            <button
              className="DeleteVillageButton"
              onClick={this.deleteAllFriendsButtonHandler}
            >
              &#x2622;
            </button>

            <AddSmurf
              className="App__addSmurf"
              addSmurfHandler={this.addSmurfHandler}
            />

            <button className="EditVillageButton">&#x270e;</button>
          </div>
        </div>

        {this.props.showUi ? (
          <Smurfs className="App__smurfs" smurfs={this.props.smurfs} />
        ) : (
          <img src={logo} className="LoadingPicture" alt="loading-logo" />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showUi: state.showUi,
    smurfs: state.smurfs,
    evictedSmurfs: state.evictedSmurfs,
  };
};

export default connect(mapStateToProps, { getSmurfs, addSmurf })(App);
