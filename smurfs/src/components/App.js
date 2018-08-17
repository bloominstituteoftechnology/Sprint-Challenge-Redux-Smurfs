import React, { Component } from 'react';
import './App.css';
import { fetchStuff, addSmurf } from '../actions';
import { connect } from 'react-redux';
import SmurfVillage from './smurfVillage';



class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      height: ''
    }
  }

  componentDidMount() {
    this.props.fetchStuff();
  }



  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.fetchingSmurfs ? (<span>materializing smurfs...</span>) : (
          <SmurfVillage smurfs={this.props.smurfs} />
        )}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    fetchingSmurfs: state.fetchingSmurfs
    
  };
};

export default connect(mapStateToProps, { fetchStuff, addSmurf })(App);
