import React, { Component } from 'react';
import './App.css';
import {get, deleteSmurf} from '../actions'
import { connect } from 'react-redux';
import Addform from './addform';

class App extends Component {

  componentDidMount() {
    this.props.get()
   }


  render() {
    return (
      <div className="App">
        <h1><i class="fas fa-dove"></i>~*~Smurf Collection~*~</h1>
        <div className = "doves">
        <i class="fas fa-dove fa-spin"></i>
        <i class="fas fa-dove fa-spin"></i>
        <i class="fas fa-dove fa-spin"></i>
        <i class="fas fa-dove fa-spin"></i>
        <i class="fas fa-dove fa-spin"></i>
        
        </div>
        {this.props.loading? (<i className="fas fa-spinner fa-pulse"></i>):(
          <div className="page">
          <Addform />
          <div className="smurfs">
          {this.props.smurfs.map(smurf => 
          <div className="smurf-card">
            <img src='https://toppng.com/public/uploads/preview/smurf-115309669373ybtzqmwso.png'/>
            <p>{smurf.name}</p>
            <p>Age: {smurf.age}</p>
            {console.log(smurf.id)}
            <p>Height: {smurf.height}</p>
            <button onClick={()=> this.props.deleteSmurf(smurf.id)}>Say G'bye</button>
          </div>
          )}
          </div>
          </div>
        )}
      </div>
    );
  }
}

const mapState = state => {
  return {
    smurfs: state.smurfs,
    loading: state.loading
  }
}

export default connect(mapState, {get, deleteSmurf})(App);
