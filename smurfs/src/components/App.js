import React, { Component } from 'react';
import './App.css';
import { getSmurfs, addSmurf } from "../actions";
import { connect } from "react-redux";
import AddSmurf from './AddSmurf';

class App extends Component {

  state = {
    smurf: ''
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className='App'>
      <h1>SMURFS!</h1>
      <AddSmurf />
      {this.props.smurfs.map(smurf => {
        return (
      <div class="container mt-sm-4" key={smurf.name}>
        <div class="row justify-content-sm-center">
          <div class="card smurf-card mb-sm-4  col-sm-6">
            <div class="card-header smurf-card">
              <p class="d-sm-inline">{smurf.name}</p>
              <button class="btn btn-danger float-right d-sm-inline">
                Delete Smurf
              </button>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">{smurf.height}</li>
              <li class="list-group-item">
                {smurf.age} smurfs years old
              </li>
            </ul>
          </div>
        </div>
      </div>
        )
      })}
      </div>
    )
    // console.log(this.props)
    // return <div className="App">
    //     <h1>SMURFS!</h1>
    //     <ul>
    //       {this.props.smurfs.map(smurf => {
    //         return <div key={smurf.name}>{smurf.name}</div>;
    //       })}
    //     </ul>
    //   </div>;
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    pending: state.pending
  };
};
export default connect(mapStateToProps, { getSmurfs, addSmurf })(App);
